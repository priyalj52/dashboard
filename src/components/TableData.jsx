import React from "react";

const TableData = ({ name, userName, email, id }) => {
    const isOddIndex = id % 2 !== 0;
    const bgColorClass = isOddIndex ? 'bg-white' : '';
  
  return (
    <div>
      <div
        className={`tables  ${bgColorClass} flex justify-around  w-[80%] ml-[5%] p-4 rounded-md`}
      >
        <span>Date</span>
        <span>{name}</span>
        <span>{userName}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default TableData;
