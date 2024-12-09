import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";
import Logo from "../assets/DatingLogo.png";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: <FaFacebookF color="white" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaTwitter color="white" />,
  },
  {
    name: "pinterest",
    url: "https://pinterest.com",
    icon: <FaPinterest color="white" />,
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    icon: <FaInstagram color="white" />,
  },
];

const Footer = () => {
  return (
    <footer
      className="flex justify-evenly items-center flex-col 
      lg:flex-row bg-white h-fit w-100 py-3 px-2 flex-wrap"
    >
      <div className="basis-1/3 flex justify-center items-center gap-2">
        <img className="h-[50px] w-[50px]" src={Logo} alt="Sites Main Logo" />
        <h2 className="DatingLogo text-2xl lg:text-3xl font-bold italic text-[#ED147D]">
          DatingLogo
        </h2>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-evenly 
      items-center gap-4 basis-2/3 px-3"
      >
        <p
          className="text-base md:text-lg xl:text-xl 
        font-semibold text-[#ED147D] text-center"
        >
          Copyright @2023 Qiupid. All Rights Reserved
        </p>
        <div className="flex flex-row justify-center items-center gap-2">
          {socialMedia.map((items) => {
            return (
              <a
                href={items.url}
                key={items.name}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-slate-700 shadow-xl shadow-gray-400"
              >
                {items.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
