import React from "react";
import { IoIosPeople } from "react-icons/io";
import { PiLaptopLight } from "react-icons/pi";
import { IoMaleSharp } from "react-icons/io5";
import { IoIosFemale } from "react-icons/io";
import FaqContent from "./FaqContent";

const FaqSection = () => {
  return (
    <div className="flex justify-center items-center w-full h-fit">
      <div className="w-full h-fit px-2 lg:px-10 py-10 max-w-[1000px]">
        <div className="flex-col w-full flex justify-center items-center bg-white h-fit">
          {/* FAQ Images */}
          <div
            className="flex flex-col md:flex-row rounded-2xl justify-between
        items-center overflow-hidden h-fit w-full"
          >
            {/* Image section */}
            <div className="basis-1/2 h-[500px]">
              <img
                src="https://img.freepik.com/free-photo/stylish-couple-love-sitting-street-romantic-trip-taking-photo_285396-9916.jpg?t=st=1733481580~exp=1733485180~hmac=b7cdbb2dc9fedce0e89b71f684040df445a66baef65e0efe73274e26c989f240&w=1380"
                alt="image of a couple"
                className="object-cover h-full w-full"
              />
            </div>
            <div
              className="basis-1/2 min-w-[50%] flex flex-col justify-evenly items-center
            bg-[#db147d] py-3 px-3 h-[500px] gap-5"
            >
              <h4
                className="text-xl lg:text-3xl text-white italic 
                font-bold uppercase text-center"
              >
                it all starts with a date
              </h4>
              <p className="text-white text-center mt-5 text-sm lg:text-base">
                You find us, finally, and you are already in love. More than
                98000 around the India already shared the same experience and
                users our system. Joining us today just got easier!
              </p>
              <div className="flex flex-col justify-evenly items-center px-5 gap-5">
                {/* 1st row Icons */}
                <div className="flex flex-row gap-2">
                  <div className="flex justify-center flex-col items-center">
                    <IoIosPeople size={70} color="white" />
                    <h2 className="text-3xl font-bold text-white">98000</h2>
                    <p className="text-white text-center font-semibold italic">
                      Members in total
                    </p>
                  </div>
                  <div className="flex justify-center flex-col items-center">
                    <PiLaptopLight size={70} color="white" />
                    <h2 className="text-3xl font-bold text-white">50000</h2>
                    <p className="text-white text-center font-semibold italic">
                      Members Online
                    </p>
                  </div>
                </div>
                {/* 2nd row Icons */}
                <div className="flex flex-row gap-2">
                  <div className="flex justify-center flex-col items-center">
                    <IoIosFemale size={70} color="white" />
                    <h2 className="text-3xl font-bold text-white">30000</h2>
                    <p className="text-white text-center font-semibold italic">
                      Members Online
                    </p>
                  </div>
                  <div className="flex justify-center flex-col items-center">
                    <IoMaleSharp size={70} color="white" />
                    <h2 className="text-3xl font-bold text-white">20000</h2>
                    <p className="text-white text-center font-semibold italic">
                      Members Online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ content section */}
          <div>
            <FaqContent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
