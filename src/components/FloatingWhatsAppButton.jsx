import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Install react-icons for the WhatsApp icon

const FloatingWhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the message after a delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000); // 1-second delay

    // Hide the message after 5 seconds
    const hideTimer = setTimeout(() => {
      setShowMessage(false);
    }, 10000); // Message visible for 5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9831991505"; // Replace with your WhatsApp number
    const message = "Hello, I would like to register and date!"; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Open WhatsApp link in a new tab
  };

  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col items-center gap-2"
      style={{ zIndex: 1000 }}
    >
      {/* Message Bubble */}
      {showMessage && (
        <div
          className="bg-white text-black text-sm absolute bottom-10 right-8 
          px-4 py-2 rounded-lg shadow-2xl animate-bounce w-[200px]"
          style={{ marginBottom: "0.5rem" }}
        >
          Register and date! Message me!
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 bg-green-500 rounded-full flex 
        justify-center items-center shadow-lg hover:shadow-xl transition-all"
        aria-label="WhatsApp Button"
      >
        <FaWhatsapp size={28} color="white" />
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;
