import React, { useState } from "react";
import email_icon from "../assets/email.jpg";
import password_icon from "../assets/password.jpg";
import person_icon from "../assets/person.jpg";
import '../css/LoginSignUp.css';

function LoginSignUp() {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person_icon} alt="person" width={30} />
            <input type="text" placeholder="Username" />
          </div>
        )}
        
        <div className="input">
          <img src={email_icon} alt="email" width={30} />
          <input type="email" placeholder="Email" />
        </div>
        
        <div className="input">
          <img src={password_icon} alt="password" width={30} />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot password? <span>Click here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
