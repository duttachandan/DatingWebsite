import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import QrCode from "../assets/qrCode/DatingQrCode.png";
import Modal from "../components/Modal";

const CommonCode = ({ handleSubmit, setFormData, formData }) => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div
        className="flex flex-col lg:flex-row gap-10 w-fit 
      bg-white rounded-xl shadow-2xl p-10"
      >
        <div className="flex flex-col gap-3 justify-center items-center">
          <img
            className="w-[200px] h-[200px] object-cover"
            src={QrCode}
            alt="QR Code"
          />
          <h2 className="text-xl font-bold text-center">
            Scan this QR code to deposit funds
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-start flex-col gap-5"
        >
          <div className="w-full flex justify-center items-start flex-col gap-3">
            <label htmlFor="upiid" className="text-pink-500">
              Enter Your UPI Id:
            </label>
            <input
              type="text"
              name="upiid"
              placeholder="eg: 4138xxxxxxx"
              value={formData.upiid} // Bind value
              onChange={(e) =>
                setFormData({ ...formData, upiid: e.target.value })
              } // Update state
              className="py-2 px-3 rounded-xl outline-none 
              border-pink-500 border-[2px] w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-red-500 to-pink-500 text-white py-2 
            rounded-md hover:bg-gradient-to-bl transition-colors font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const Deposit = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("plan");
  const [formData, setFormData] = useState({
    upiid: "",
  });
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.upiid === "") {
      // Show modal if UPI ID is empty
      setError(true);
      setTimeout(() => {
        setError(false);
        return;
      }, 2000);
      return;
    } else {
      console.log("UPI ID Submitted:", formData.upiid);
      setModal(true);
      setTimeout(() => {
        setModal(false);
        navigate("/");
      }, 3000);
      // Handle the actual submission logic
    }
  };

  return (
    <div className="mt-[80px] text-black">
      <div className="text-center italic px-3">
        You have initiated{" "}
        <span className="text-bold text-pink-500">{query}</span> plan for
        Payment, after making your payment kindly enter your upi id and submit,
        we will initiate your payment as soon as possible and the amount will
        reflect on your wallet in no time
      </div>
      <CommonCode
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
      />
      {modal && (
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#ED147D]">
              Your Request For Deposit Has been submitted
            </h2>
            <p className="text-gray-600">
              We will review your request and make this payment as fast as
              possible
            </p>
          </div>
        </Modal>
      )}

      {error && (
        <Modal isOpen={error} onClose={() => setError(false)}>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#ED147D] italic">
              Kindly Type the Upi Id for Payment submission without this your
              money will not show on your wallet as a result you will not be
              able to purchase any of our plans
            </h2>
            {/* <button
              onClick={() => onClose()}
              className="bg-red-700 py-2 px-4 rounded-xl text-white"
            >
              Try Again
            </button> */}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Deposit;
