import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        {/* You can add other routes here */}
        <Route
          path="/"
          element={
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">Welcome to the App</h1>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-2xl text-gray-700">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
