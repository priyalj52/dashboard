import React from "react";
import profile from "../images/profile.png";
import { BiChevronDown } from "react-icons/bi";
import Feed from "./Feed";
const Header = () => {
  return (
    <div className=" flex-col h-0">
      {/* pehla div  */}
      <div>
        <div className="ml-[auto] w-[10rem] rounded-full absolute md:right-0 left-[40%]">
          <div className="main flex m-5  rounded bg-[#F4F8F9]">
            <div className="image rounded-sm relative">
              <img
                src={profile}
                alt="profile"
                className="mr-auto  w-full rounded-full"
              />
            </div>
            <div className="details">
              <p className="font-light">ChethanB</p>

              <BiChevronDown
                className="left-[9rem]
    top-[2rem] absolute "
                size={"15px"}
              />

              <p className="text-[#D3D3D3] text-sm  "> Brand</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default Header;
