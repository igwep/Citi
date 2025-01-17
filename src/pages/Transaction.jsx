import React from "react";

const TransactionsHistoryPage = () => {
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
      <div className="bg-blue-600 text-white p-6 rounded-b-lg">
        <p className="text-lg">Savings A/c 9876543210</p>
        <h2 className="text-3xl font-bold mt-2">$44,650.00</h2>
        <p className="text-sm mt-1">Available Balance</p>
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