import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsModalOpen(true);

    // Redirect to home page after 5 seconds
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-100">
        <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
          {/* Left Section */}
          <div
            className="
          hidden md:flex md:w-2/5 bg-gradient-to-r 
          from-orange-500 via-red-500 to-pink-500 
          p-8 text-white flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 opacity-90">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MdEmail size={20} />
                  <div>
                    <p className="font-semibold">CHAT TO US</p>
                    <p className="text-sm opacity-90">hi@ourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MdLocationOn size={20} />
                  <div>
                    <p className="font-semibold">OFFICE</p>
                    <p className="text-sm opacity-90">
                      121 Rock Street, 21 Avenue,
                      <br />
                      New York, NY 92103-9000
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MdPhone size={20} />
                  <div>
                    <p className="font-semibold">PHONE</p>
                    <p className="text-sm opacity-90">
                      Mon-Fri from 8am to 5am
                    </p>
                    <p className="text-sm opacity-90">+1(555) 000-000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="hover:opacity-80">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-3/5 bg-white p-8">
            <h2 className="text-2xl font-bold mb-6">Level up your brand</h2>
            <p className="mb-6">
              You can reach us anytime via{" "}
              <span className="text-blue-600">hi@ourcompany.com</span>
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone (e.g. +14155552675)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 
                to-pink-500 text-white py-3 px-6 rounded-md
                hover:bg-pink-600 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-6">Thank you!</h2>
              <button
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
            <p>Your submission has been received. Redirecting...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
