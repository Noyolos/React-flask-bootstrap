import React from 'react'
import "../styles/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
    <h1>Landing Page</h1>
    <p>Hello and welcome!</p>
    <Link to="/login" className="landing-login-button">Login</Link>
    <Link to="/register" className="landing-register-button">Register</Link>
    <Link to="/company" className="landing-register-button">Go to Company Page (Lab 2)</Link>
    <a
    href="http://localhost:5000/lab1/test-get?name=Student"
    target="_blank"
    rel="noopener noreferrer"
    className="landing-register-button"   // ✅ 用跟 Link 一样的 class
>
  Open GET Demo (Flask 5000)
</a>

  </div>
  )
}

export default Landing