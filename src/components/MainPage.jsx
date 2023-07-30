import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Feed from "./Feed";

const MainPage = () => {
  return (
    <div>
      <div className="flex ">
        <Sidebar />
        <div className="">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
