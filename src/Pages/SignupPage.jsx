import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Store/Store";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const SignupPage = () => {
  const { logIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState(false);
  const [updateForm, setUpdateForm] = React.useState({
    text: "",
    password: "",
    errors: {},
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === null || value === null) {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 3000);
    }
    setUpdateForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!updateForm.text || !updateForm.password) {
      setErrors(true); // Open error modal
      setTimeout(() => {
        setErrors(false);
      }, 3000);
      return;
    }
    try {
      const response = await logIn(updateForm.text, updateForm.password);
      console.log(response.status);
      if (response.status === "500") {
        setErrors(true); // Open error modal
        return;
      }
      if (response) {
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrors(true); // Open error modal
    }
  };

  return (
    <div
      className="flex justify-center items-center 
    pt-4 py-12 px-2 md:px-8 bg-[#db147b] md:bg-white"
    >
      <div
        className="min-h-[80vh] mt-[80px] w-full flex container rounded-xl 
      overflow-hidden shadow-lg border-[#db147b] border-[3px]"
      >
        {/* Left side - Form */}
        <div
          className="w-full md:w-1/2 flex flex-col 
        items-center justify-center
        p-5 bg-white"
        >
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-center mb-2 md:md-8">
              <div className="w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 15 C20 15, 15 50, 50 85 C85 50, 80 15, 50 15"
                    fill="none"
                    stroke="#9C27B0"
                    strokeWidth="3"
                  />
                  <path d="M50 35 L60 50 L50 65 L40 50 Z" fill="#FF5722" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-4">
              We are The Lotus Team
            </h2>

            <p className="text-gray-600 mb-6 text-center">
              Please register an account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={updateForm.text}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={updateForm.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                SIGN UP
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/terms" className="text-gray-600 hover:underline">
                Terms and conditions
              </Link>
            </div>

            {/* <div className="mt-8 flex items-center justify-between">
              <span className="text-gray-600">Have an account?</span>
              <Link
                to="/signup"
                className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-md hover:bg-pink-50 transition-colors"
              >
                LOGIN
              </Link>
            </div> */}
          </div>
        </div>

        {/* Right side - Content */}
        <div
          className="hidden md:flex w-1/2 bg-gradient-to-br 
        from-orange-500 via-red-500 to-pink-500
        items-center justify-center p-12"
        >
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-6">
              We are more than just a company
            </h1>
            <p className="text-lg opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen || errors} onClose={() => setErrors(false)}>
        <div className="p-6 bg-white">
          <h2
            className={`text-2xl font-bold mb-4 ${
              isModalOpen ? "text-pink-500" : "text-gray-600"
            }`}
          >
            {isModalOpen ? "Success" : "Errors"}
          </h2>
          <p className="mb-6 text-gray-600">
            {isModalOpen
              ? "Your Email Registered Sucssesfully"
              : "Error Credentials, kindly Check your Credentials"}
          </p>
          <p className="text-pink-500">Redirecting...</p>
          {errors ? (
            <button
              onClick={()=>setErrors(false)}
              className="font-bold text-slate-300 py-2 px-5"
            >
              Close
            </button>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SignupPage;
