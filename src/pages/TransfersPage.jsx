import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useAuth } from "../context/AuthContext";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { colors } from "@mui/material";

const TransfersPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-xl text-red-500">User not authenticated!</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-100  font-lato min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="lg:ml-64 md:px-4 -mt-20 md:mt-0 z-20 flex-grow p-6">
 
        {/* Pre-Registered Payees Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
  <h2 className="text-lg text-customGray">To Pre Registered Payees</h2>
  <div className="flex items-center justify-between  pb-2">
    {/* Left Content */}
    <div>
      <p className="py-4 border-b ">Another Citi A/C of Mine</p>
      <p className="py-4 border-b">Another Citi A/C</p>
    </div>

    {/* Shared SVG */}
    <div>
      <img
        src="/Svg/Footer.svg"
        alt="Shared Icon"
        className="w-18 h-18"
      />
    </div>
  </div>

  {/* Remaining items */}
  <div className="flex items-center justify-between  pb-2">
    {/* Left Content */}
    <div>
      <p className="py-4 border-b ">Another Citi A/C of Mine</p>
      <p className="py-4 border-b">Another Citi A/C</p>
    </div>

    {/* Shared SVG */}
    <div>
      <img
        src="/Svg/bank-2-svgrepo-com.svg"
        alt="Shared Icon"
        className="w-20 h-14"
      />
    </div>
  </div>
</div>



        {/* Other Payees Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
  <h2 className="text-lg font-semibold text-gray-700">To Other Payees</h2>
  <ul className="mt-4">
    {/* First item */}
    <li className="flex items-center justify-between border-b border-gray-300 pb-4">
      {/* Content */}
      <div className="flex flex-col">
        <span>Order Demand Draft</span>
        <span className="text-sm text-gray-500">Request for Demand Draft online</span>
      </div>
      {/* Right Arrow Icon */}
      <ArrowForwardIosOutlinedIcon sx={{colors: '#9fa7ae'}} />
    </li>
    {/* Second item */}
    <li className="flex items-center justify-between  pb-4 pt-4">
      {/* Content */}
      <div className="flex flex-col">
        <span>One Time Transfer via IMPS</span>
        <span className="text-sm text-gray-500">To any bank account immediately</span>
      </div>
      {/* Right Arrow Icon */}
      <ArrowForwardIosOutlinedIcon />
    </li>
  </ul>
</div>



        {/* Notes Section */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-md font-medium text-gray-700">Note:</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-600">
            <li>NEFT transfers will be done after 6 PM and processed the next day.</li>
            <li>IMPS transfers are instant and available 24/7.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TransfersPage;