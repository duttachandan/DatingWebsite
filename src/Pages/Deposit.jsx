import React, { useState, useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Modal from "../components/Modal";
import { LoginContext } from "../Store/Store";

const CommonCode = ({ handleSubmit, setFormData, formData }) => {
  const { QrCode, state } = useContext(LoginContext);
  useEffect(() => {
    const fetchQr = async () => {
      const response = await QrCode();
      return response;
    };
    fetchQr();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9831991505"; // Replace with your WhatsApp number
    const message = "Hello Sir I have Initiated My payment, My Upi Id is:"; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Open WhatsApp link in a new tab
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div
        className="flex flex-col lg:flex-row gap-10 w-fit 
      bg-white rounded-xl shadow-2xl p-10"
      >
        <div className="flex flex-col gap-3 justify-center items-center">
          {state.qrCode ? (
            <img
              className="w-[200px] h-[200px] object-cover"
              src={`data:image/png;base64,${state.qrCode}`}
              loading="lazy"
              alt="QR Code"
            />
          ) : (
            <div className="min-w-[200px] min-h-[200px] object-cover bg-gray-400 blur-2xl">
            </div>
          )}
          <h2 className="text-xl font-bold text-center">
            Scan this QR code to deposit funds
          </h2>
          <button
            onClick={handleWhatsAppClick}
            className="px-3 py-2 bg-green-500 rounded-full flex 
          justify-center items-center shadow-lg hover:shadow-xl transition-all"
            aria-label="WhatsApp Button"
          >
            <FaWhatsapp size={28} color="white" />
            <span className="ml-2 text-white font-bold">
              Send Your Upi Id here
            </span>
          </button>
        </div>
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
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Deposit;
