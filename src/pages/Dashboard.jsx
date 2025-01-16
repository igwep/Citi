import React from "react";
import { AccountSummary } from "../Components/AccountSummary";
import { ActionButtons } from "../Components/ActionButtons";
import { Header } from "../Components/Header";
import { UserInfo } from "../Components/UserInfo";
import { ProfilePicture } from "../Components/ProfilePicture";
import { Footer } from "../Components/Footer";

const Dashboard = () => {
  const user = {
    name: "Joseph Harvey",
    lastLogin: "22 June, 2017 04:25 CST",
    balance: "44,650.00",
    savings: "9876543210",
    debit: "9876 **** **** 3210",
    profilePicture: "/path-to-profile-picture.jpg", // Replace with actual profile picture URL
  };

  return (
    <div className="bg-gray-100 font-lato min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="lg:ml-64 md:px-4 flex-grow">
        <UserInfo
          name={user.name}
          lastLogin={user.lastLogin}
          profilePicture={user.profilePicture}
        />
        <ProfilePicture />
        <AccountSummary
          balance={user.balance}
          savings={user.savings}
          debit={user.debit}
        />
        <div className="pb-10">
          <ActionButtons />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
