import React, { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../styles/Login.css";
import { Link } from "react-router-dom"; // 这里只需要 Link，不再需要 useNavigate
// Lab1 其实已经不需要 toast 了，你要的话也可以删掉这一行
// import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // 🔴 注意：我们不再需要 handleLoginSubmit，
  // 因为这次是让浏览器用原始的 <form> 行为去 POST 给 Flask。
  // 所以这里不写任何 onSubmit handler。

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>

      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>

          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>

            {/* ✅ 核心改动：加上 method & action，让表单 POST 到 Flask */}
            <form
              method="POST"
              action="http://localhost:5000/login"
            >
              {/* Email 输入框：加上 required 和 type="email" */}
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
              />

              {/* Password 输入框：加上 required + minLength */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                  minLength={6}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(true)} />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>

              <div className="login-center-buttons">
                {/* 这个按钮现在是原生提交按钮，会触发表单 POST 到 Flask */}
                <button type="submit">Log In</button>

                {/* Google 的这个 button 我先保留成 type="button"，避免误触提交 */}
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>

            {/* 你也可以在这里加一小段文字解释 Lab1： */}
            {/* <p className="lab1-note">
              This login form uses HTTP POST to send data to a Flask server at
              http://localhost:5000/login as part of Lab 1.
            </p> */}
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
