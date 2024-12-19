import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Modal from '../components/Modal'
import Canonical from "../components/Canonical";


const WithDraw = () => {
  const navigate = useNavigate();
  const [formSubmit, setFormSubmit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    amount: "",
    paymentMethod: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.amount === "" ||
      formData.paymentMethod === ""
    ) {
      alert("First Name and Last Name are required");
      return;
    }
    console.log("Form submitted:", formData);
    setFormSubmit(true);
    setTimeout(() => {
      setFormSubmit(false);
      setFormData({
        firstName: "",
        lastName: "",
        amount: "",
        paymentMethod: "",
        email: "",
      });
      navigate("/");
    }, 3000);
  };

  return (
    <>
    <Canonical />
    <Outlet />
    <div
      className="min-h-screen w-full flex flex-col 
      md:flex-row justify-center items-center
      bg-gradient-to-r from-orange-500 
      via-red-500 to-pink-500 py-3 pt-[90px]"
    >
      {/* Form Section */}
      <div className="w-[90%] md:w-2/3 p-6 mx-auto md:mx-0 bg-white rounded-xl">
        <h1 className="text-2xl font-semibold mb-8">Payment Withdrawal Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Section */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Amount Section */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Enter Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                className="w-full p-2 border rounded-md pl-8"
                required
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Enter without dollar sign
            </p>
          </div>

          {/* Payment Method Section */}
          {/* <div>
            <label className="block text-sm font-medium mb-2">
              Choose Payment method <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Paypal", "Skrill", "BTC", "Bank Wire", "Mail"].map(
                (method) => (
                  <div key={method} className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      className="mr-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          paymentMethod: e.target.value,
                        })
                      }
                    />
                    <label>{method}</label>
                  </div>
                )
              )}
            </div>
          </div> */}

          {/* Email Section */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Payment Id{" "}
              <span className="text-pink-600">(Paste Your Upi Id)</span>
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="xyz@ybl.com"
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            />
          </div>

          {/* Email Section */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="example@example.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Verification Section */}
          {/* <div>
            <label className="block text-sm font-medium mb-2">
              Please verify that you are human{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="h-12 w-full border rounded-md bg-gray-50">
            </div>
          </div> */}

          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-red-500 to-pink-500 text-white py-2 
            rounded-md hover:bg-gradient-to-bl transition-colors font-bold"
          >
            Submit
          </button>
        </form>

        <Modal isOpen={formSubmit} onClose={() => setFormSubmit(false)}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#ED147D]">
              Your Request For Withdrawl Has been submitted
            </h2>
            <p className="text-gray-600">
              We will review your request and make this payment as fast as
              possible
            </p>
          </div>
        </Modal> 
      </div>
    </div>
    </>
  );
};

export default WithDraw;
