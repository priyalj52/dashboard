import React from "react";
import { BsInstagram } from "react-icons/bs";

const TableData = ({ name, userName, email, id, website }) => {
  const isOddIndex = id % 2 !== 0;
  const bgColorClass = isOddIndex ? "bg-white" : "";

  return (
    <div>
      <div
        className={`tables w-full   text-xs md:text-sm ${bgColorClass} grid grid-cols-4 justify-items-center md:w-[80%] md:ml-[5%] p-4 rounded-md`}
      >
        <span>{name}</span>
        <span>{userName}</span>
        <a
          target="_blank"
          href={`https://${website}`}
          className="cursor-pointer mr-5"
        >
          {console.log(`https://${website}`)}
          <BsInstagram />
        </a>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default TableData;
