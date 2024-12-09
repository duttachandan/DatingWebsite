import React from "react";
import HomeAds from "../components/HomeAds.jsx";
import HomeAdsReverse from "../components/HomeAdsReverse.jsx";
import ProfileSuggestion from "../components/ProfileSuggestion.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import FaqSection from "../components/FaqSection.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      {/* 1st Para */}
      <div
        className="bg_Home pt-[80px] min-h-[80vh] 
      flex justify-center items-center flex-col gap-3 px-2"
      >
        <h1 className="text-4xl text-center md:text-5xl text-white font-semibold">
          Dating for Grown Ups
        </h1>
        <h2 className="text-3xl text-center md:text-4xl text-white font-semibold">
          Make A Real Connection
        </h2>
        <p
          className="text-white text-center
        text-md md:text-lg font-medium px-2"
        >
          Start meetings singles who are ready to commit today
        </p>
        <Link
          to="/signup"
          className="rounded-full font-semibold italic
        text-[#ED147D] bg-white py-2 px-6 mt-3"
        >
          Get Started
        </Link>
      </div>
      {/* 2nd Para */}
      <div
        className="bg-[#ED147D] flex flex-col py-5 px-5
       justify-between items-center gap-3"
      >
        {/* <img src="" alt="" /> */}
        <div className="text-center flex flex-col gap-2">
          <h1
            className="text-2xl md:text-4xl italic 
            font-bold text-white"
          >
            Start your love story
          </h1>
          <p className="text-white/50 text-lg font-bold">
            Find your perfect match
          </p>
        </div>
        <Link
          to="/signup"
          className="rounded-full font-semibold italic
        text-[#ED147D] bg-white py-2 px-6"
        >
          Sign In
        </Link>
      </div>
      {/* 3rd Para */}
      <HomeAds />
      {/* 4th Para */}
      <HomeAdsReverse />
      {/* 5th Para */}
      <ProfileSuggestion />
      {/* 6th Para */}
      <ImageSlider />
      {/* 7th Para/ FAQ section */}
      <FaqSection />
    </div>
  );
};

export default Home;
