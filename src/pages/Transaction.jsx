import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { colors, IconButton } from "@mui/material";


const TransactionsHistoryPage = () => {
  const { user, loading } = useAuth();


  if (loading) {
    return <LoadingSpinner />; // Loading state
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-xl text-red-500">User not authenticated!</h2>
      </div>
    );
  }


  // Example transaction data
  const transactions = [
    { date: "02 July", description: "Verizon", category: "Mobile Bill Payment", amount: -142.36 },
    { date: "01 July", description: "Salary Credited", category: "Google Inc.", amount: 3868.0 },
    { date: "28 June", description: "Best Buy - XBOX One S", category: "Product Purchase", amount: -249.99 },
    { date: "11 June", description: "Card Payment ****9876", category: "Citibank N.A.", amount: -362.36 },
    { date: "10 June", description: "Mc Donalds", category: "Food", amount: -68.0 },
    { date: "08 June", description: "Direct Energy", category: "Product Purchase", amount: -159.0 },
  ];

  return (
    <div className="bg-gray-100 font-lato min-h-screen flex flex-col">
      {/* Account Summary */}
      <div className="bg-customColor relative flex justify-evenly items-center  text-white  h-56">
      <div className="absolute overflow-hidden inset-0">
      <Link  to="/dashboard"
         // Navigates back to the previous page
        className="absolute top-4 cursor-pointer left-4 z-50 text-white" // Position it in the top-left corner of the screen
      >
        <ArrowBackIcon sx={{color: 'white'}} />
      </Link>
        {/* Top Left White Shape */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-5 transform -translate-x-10 -translate-y-10"></div>

        {/* Bottom Right White Shape */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 transform translate-x-10 translate-y-10"></div>

        {/* Diagonal White Stripe */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-transparent opacity-5 transform -rotate-12"></div>
      </div>
        <div className="flex flex-col items-center gap-8">
        <p className="text-lg">Savings A/c 9876543210</p>
       <div className="flex flex-col items-center">
       <p className="text-sm mt-1">Available Balance</p>
       <h2 className="text-4xl  mt-2">$99,000.23{/*  ${user.balance.toLocaleString()} */}</h2>
       </div>
       
        </div>
      </div>

      {/* Transactions History */}
      <div className="bg-white mt-4 p-4 mx-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700">Transactions History</h2>
        <ul className="divide-y divide-gray-200 mt-4">
          {transactions.map((transaction, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">{transaction.date}</p>
                <p className="text-gray-800 font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
              <p
                className={`font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.414 5.414a1 1 0 00-.293.707v3.586a1 1 0 01-.293.707l-2 2A1 1 0 0111 18v-5.586a1 1 0 00-.293-.707L5.293 7.707A1 1 0 015 7V4z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TransactionsHistoryPage;