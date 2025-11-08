import React from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("auth"); // dummy_token_12345 from Login

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-card">
        <h2>Dashboard</h2>
        {token ? (
          <p>Hi, you're logged in. (token: {token})</p>
        ) : (
          <p>You are not logged in.</p>
        )}

        <button onClick={handleLogout} className="logout-btn">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
