import React, { useState, useContext } from "react";
import { LoginContext } from "../Store/Store";
import { useNavigate } from "react-router-dom";
import {
  model1,
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
  model8,
  model9,
  model10,
  model11,
  model12,
} from "../assets/index";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

const arrayImage = [
  {
    id: 1,
    name: "Niharika Kaur",
    age: "92xxxxxxxx",
    image: model1,
  },
  {
    id: 2,
    name: "Amy Dcruz",
    age: "91xxxxxxxx",
    image: model2,
  },
  {
    id: 3,
    name: "Rilly Jones",
    age: "81xxxxxxxx",
    image: model3,
  },
  {
    id: 4,
    name: "Riya Lee Kapoor",
    age: "87xxxxxxxx",
    image: model4,
  },
  {
    id: 5,
    name: "Prachi Roy",
    age: "69xxxxxxxx",
    image: model5,
  },
  {
    id: 6,
    name: "Natasha Paul",
    age: "89xxxxxxxx",
    image: model6,
  },
  {
    id: 7,
    name: "Artika Roy",
    age: "62xxxxxxxx",
    image: model7,
  },
  {
    id: 8,
    name: "Priya Punia",
    age: "83xxxxxxxx",
    image: model8,
  },
  {
    id: 9,
    name: "Payel Agarwal",
    age: "98xxxxxxxx",
    image: model9,
  },
  {
    id: 10,
    name: "Sudipa Kaur",
    age: "97xxxxxxxx",
    image: model10,
  },
  {
    id: 11,
    name: "Priya Shetty",
    age: "99xxxxxxxx",
    image: model11,
  },
  {
    id: 12,
    name: "Roshni Kapoor",
    age: "98xxxxxxxx",
    image: model12,
  },
];

const ProfileSuggestion = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDating, setShowDating] = useState(false);
  const navigate = useNavigate();
  const { state } = useContext(LoginContext);
  const handleCardClick = () => {
    if (state.user.id) {
      console.log("I am here");
      setShowDating(true);
      setTimeout(() => {
        setShowDating(false);
        navigate("/packages");
      }, 3000);
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/signup");
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 px-2 md:px-10">
        <h3 className="text-4xl italic font-bold text-[#ED147D] text-center">
          Some Best Profiles Near You, Start Dating With Them!
        </h3>
        <div
          className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 
          justify-center items-center gap-2 sm:gap-5 mt-8"
        >
          {arrayImage.map((item) => (
            <div
              key={item.id}
              className="w-full h-[270px] sm:h-[400px] bg-white rounded-xl sm:scale-100
              shadow-lg overflow-hidden flex flex-col justify-center items-center
              cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={handleCardClick}
            >
              <div className="h-[220px] sm:h-[350px] w-full align-top">
                <img
                  className="w-full h-[220px] sm:h-[350px] object-cover object-top"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="p-4 h-[50px] sm:h-[50px] flex flex-col justify-center items-center">
                <h4 className="text-md font-bold text-nowrap text-[#bd147d]">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={showModal || showDating}
        onClose={() => setShowModal(false)}
      >
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#ED147D]">
            {showDating
              ? "Purchase a plan to  sent a dating request"
              : "Sign Up to View Profile"}
          </h2>
          <p className="text-gray-600">
            {showDating
              ? "Please Purchase a Plan to continue"
              : "Please create an account to connect with this person"}
          </p>
          <p>Redirecting...</p>
        </div>
      </Modal>
    </>
  );
};

export default ProfileSuggestion;
