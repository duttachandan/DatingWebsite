import React from "react";
import { LiaUserPlusSolid, LiaGlassCheersSolid } from "react-icons/lia";
import { GiSelfLove } from "react-icons/gi";

const HomeAds = () => {
  return (
    <div className=" h-fit flex justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row h-fit py-9 px-10 container">
        <div className="basis-1/2 flex flex-col justify-center items-center gap-3">
          <h3 className="text-4xl text-[#ED147D] font-bold italic">
            How Does It Work?
          </h3>
          <p className="text-center italic">
            It all starts with trust. LDS provides us with a chance
            to discover our own selves. And, we are now Bringing the LOVE of
            your life to your fingertips. Join us! 100% Verified by team.
          </p>
          <div className="flex flex-col gap-9 justify-center items-center">
            <div className="flex flex-row justify-between items-center gap-3">
              <div>
                <LiaUserPlusSolid size={65} color="#ED147D" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#ED147D] font-bold text-3xl">
                  Create-a-Profile
                </h2>
                <p className="text-sm text-[#ed147d] italic">
                  At first, be a subscribed member and build an outstanding
                  profile of yours. Remember! It’s your first step to find your
                  perfect partner. Sign up, write your summary.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <div>
                <GiSelfLove size={65} color="#ED147D" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#ED147D] font-bold text-3xl">
                  Find matches
                </h2>
                <p className="text-sm text-[#ed147d] italic">
                  Search for your perfect partner here as per your expectations.
                  Search and find the right partner! This is the second step.
                  It’s your first step to find your perfect partner. Sign up,
                  write your summary.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <div>
                <LiaGlassCheersSolid size={65} color="#ED147D" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#ED147D] font-bold text-3xl">
                  Start Dating
                </h2>
                <p className="text-sm text-[#ed147d] italic">
                  Talk to your partner. Know more about them. Start dating.
                  Share your true emotions! Connect and get to know your
                  partner! Start dating!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 h-full flex justify-center items-center">
          <div className="border-pink-700 border-[3px] w-[400px] h-[300px] lg:h-[500px] overflow-hidden rounded-xl mb-5 lg:mb-0">
            <img
              src="https://img.freepik.com/free-photo/handsome-man-makes-proposal-his-gorgeous-girlfriend-red-dress-with-long-curly-hair_8353-6787.jpg?t=st=1733470546~exp=1733474146~hmac=23bdcf2dda75196fa2d968efa3a04998307d344bb58157b3b16736ade5991322&w=1380"
              alt="dating Images"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAds;
