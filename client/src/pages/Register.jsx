import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!username || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // 纯前端假注册
    toast.success("Account created (front-end demo)");
    navigate("/login");
  };

  return (
    <div className="register-main">
      <div className="register-card">
        <div className="register-logo">
          <img src={Logo} alt="" />
        </div>

        <h2>Create an account</h2>
        <p>Enter your details to sign up</p>

        <form onSubmit={handleRegisterSubmit}>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />

          <div className="pass-input-div">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </div>

          <button type="submit" className="register-btn">
            Sign Up
          </button>
        </form>

        <p className="register-bottom-p">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
