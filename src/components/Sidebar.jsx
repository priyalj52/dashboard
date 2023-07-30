import React from "react";
import { FiSettings } from "react-icons/fi";
import { HiMiniHashtag } from "react-icons/hi2";
import safe from "../images/security.png";
import logo from "../images/logo.png";

const Sidebar = () => {
  return (
    <div className="w-[50px] p-3 bg-white h-[80vh] flex flex-col justify-between mt-3  ">
      <div className="top flex gap-2 flex-col">
        <img src={logo} alt="logo" className="w-[5rem] mb-7 " />
        <img src={safe} alt="safe" />
        <span className="mt-5 ">
          <HiMiniHashtag size={"1.5rem"} />
        </span>
      </div>
      <div className="bottom">
        <FiSettings size={"1.5rem"} />
      </div>
    </div>
  );
};

export default Sidebar;
