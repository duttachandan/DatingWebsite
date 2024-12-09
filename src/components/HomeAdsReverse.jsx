import React from "react";
import { MdOutlinePrivacyTip, MdPeopleOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";

const HomeAdsReverse = () => {
  return (
    <div className="flex flex-col-reverse bg-[#ED147D] lg:flex-row-reverse h-fit py-9 px-10">
      <div className="basis-1/2 flex flex-col justify-center items-center gap-3">
        <h3 className="text-4xl text-white font-bold italic">
          About Romance Delight
        </h3>
        <p className="text-center text-white italic">
          Romance Delight is a dating app designed for adults, focusing on the
          most engaging and rewarding experiences for those seeking love and
          happiness.
        </p>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
            <div
              className="text-black rounded-xl border-l-white min-w-[250px]
            border-r-white border-[3] bg_gradient_fr_HomeAdsReverse py-3 px-12 flex-col flex justify-center items-center"
            >
              <MdOutlinePrivacyTip color="#ED147D" size={60} />
              <p className="text-xl font-bold text-[#ED147D]">100%</p>
              <h4 className="font-bold text-[#ED147D] text-3xl">Privacy</h4>
            </div>
            <div
              className="text-white rounded-xl border-l-white flex min-w-[250px]
            border-r-white border-[3] bg_gradient_fr_HomeAdsReverse py-3 px-12 flex-col justify-center items-center"
            >
              <CgProfile color="#ED147D" size={60} />
              <p className="text-xl font-bold text-[#ED147D] uppercase">No Fake</p>
              <h4 className="font-bold text-[#ED147D] text-3xl">Profiles</h4>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
            <div
              className="text-white rounded-xl border-l-white flex min-w-[250px]
            border-r-white border-[3] bg_gradient_fr_HomeAdsReverse py-3 px-12 flex-col justify-center items-center"
            >
              <FaPeopleGroup color="#ED147D" size={60} />
              <p className="text-xl font-bold text-[#ED147D] uppercase">No Fake</p>
              <h4 className="font-bold text-[#ED147D] text-3xl">Profiles</h4>
            </div>
            <div
              className="text-white rounded-xl border-l-white flex  min-w-[250px]
            border-r-white border-[3] bg_gradient_fr_HomeAdsReverse py-3 px-12 flex-col justify-center items-center"
            >
              <MdPeopleOutline color="#ED147D" size={60} />
              <p className="text-xl font-bold text-[#ED147D] uppercase">9800</p>
              <h4 className="font-bold text-[#ED147D] text-3xl">Members</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 h-full flex justify-center items-center">
        <div className="border-pink-700 border-[3px] w-[400px] h-[300px] lg:h-[500px] overflow-hidden rounded-xl mb-5 lg:mb-0">
          <img
            src="https://img.freepik.com/free-photo/adorable-young-couple-love-handsome-guy-gives-gift-his-sweetheart_273443-823.jpg?t=st=1733465664~exp=1733469264~hmac=514748a7f926e93b30d5dc7f88d515229de30494db09233ba2e2a22fda5a019f&w=1380"
            alt="dating Images"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAdsReverse;
