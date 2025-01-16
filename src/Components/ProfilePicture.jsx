import React from "react";

export const ProfilePicture = () => (
    <div className="relative md:hidden  flex flex-col items-center justify-center -mt-16">
      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex justify-center items-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <span className="">Welcome <span className="font-semibold">igwe precious</span> </span>
      <span className="text-sm text-customGray">last login:22 june,2024 04:25 CST</span>
    </div>
  );