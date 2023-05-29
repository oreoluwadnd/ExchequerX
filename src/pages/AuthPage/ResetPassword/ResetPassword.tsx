import React from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css";
import AuthMobileClose from "../AuthClose/AuthMobileClose";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const ResetPassword: React.FC = () => {
  return (
    <div className="resetPassword">
      <div className="resetPasswordContainer">
        <AuthMobileClose />
        <div className="resetPasswordText">
          <div className="authBackIconWrapper">
            <BsFillArrowLeftSquareFill className="authBackIcon" />
          </div>

          <img
            src="https://images.ctfassets.net/ss5kfr270og3/6L9nYTVnIW8QiYExxtszMD/739dcad4e06032f09a460f490581785b/global-verification-illustration.png?fm=webp&q=70"
            className="resetPasswordImage"
          />
          <img
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/security_369a26d96e/security_369a26d96e.png"
            className="resetpasswordImage2"
          />
          <div>
            <div className="resetPassworddetails">
              <h1>RESET PASSWORD</h1>
            </div>
            <div>
              <ul className="resetPasswordList">
                <li>
                  Enter your email address and we'll send you a link to reset
                  your password
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resetPasswordInput">
          <div className="resetPasswordInputContainer">
            <div className="resetPasswordHeader">
              <h1 className="resetPasswordHeaderText">
                Reset Your <span>Password</span>
              </h1>
              <p>
                don't have an account? <Link to={"/signUp"}>Sign up</Link>
              </p>
            </div>
            <div>
              <div className="resetPasswordrowInput">
                <div className="columnInput">
                  <label>EMAIL</label>
                  <input
                    type="text"
                    className="resetPasswordinputGroup"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="resetPasswordButtonWrapper">
              <button className="resetPasswordButton cursor">
                RESET PASSWORD
              </button>
            </div>
            <p>
              Didn't get Email? <a href="#">Resend</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
