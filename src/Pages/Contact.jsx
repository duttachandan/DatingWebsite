import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { useNavigate, Outlet } from "react-router-dom";
import Canonical from "../components/Canonical";

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
    <Canonical />
    <Outlet />
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-100 pt-[80px]">
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
                    <p className="text-sm opacity-90">hi@lovedatingsite.com</p>
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
                    <p className="text-sm opacity-90">+91 98319-91505</p>
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
              <span className="text-blue-600">hi@lovedatingsite.com</span>
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
            <div className="flex flex-col items-center justify-between">
              <h2 className="text-2xl font-bold mb-6 text-pink-500">
                Thank you!
              </h2>
              <button
                className="text-md hover:text-gray-900 px-4 font-bold py-2
                rounded-xl bg-gradient-to-t from-pink-500 to-red-400 text-white "
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
            <p className="text-slate-400 text-center mt-2">
              Your submission has been received. 
              <br />
              <span className="text-pink-500 text-lg">Redirecting...</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
