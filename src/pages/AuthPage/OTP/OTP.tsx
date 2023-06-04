import "./OTP.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../../components/UI/Modal/Modal";
import Loader from "../../../components/UI/Loader/Loader";
import OtpModal from "./OtpModal";
import { VerifyOtpApi } from "../../../features/auth/authApi";

import AuthMobileClose from "../AuthClose/AuthMobileClose";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch, RootState } from "../../../features/store";
import InputInfoLabel from "../../../components/UI/InputInfoLabel/InputInfoLabel";
import InputErrorLabel from "../../../components/UI/InputErrorLabel/InputErrorLabel";

const OTP: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state: RootState) => state.auth
  );
  const otpFormData = {
    otp: "",
  };
  const optErrorMessage = {
    otp: "",
  };

  const {
    data: otpCode,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initailErrorMessage: optErrorMessage,
    initialValues: otpFormData,
    sanitizeFn: (value) => {
      return value.trim();
    },
    validations: {
      otp: {
        required: {
          value: true,
          message: "OTP is required",
        },
        pattern: {
          value: /^[0-9]{6}$/,
          message: "Please enter a valid OTP",
        },
      },
    },
    onSubmit: () => {
      dispatch(VerifyOtpApi(otpCode));
    },
  });

  return (
    <div className="OTP">
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {isSuccess && (
        <Modal>
          <OtpModal successMessage={message} />
        </Modal>
      )}
      <div className="OTPContainer">
        <AuthMobileClose />
        <div className="OTPText">
          <img
            src="https://images.ctfassets.net/ss5kfr270og3/2FoQrOzY1njtuBeLTC4hwD/319f5788d85beba2f59c76a079855203/two_risk_scores_2x.png?fm=webp&q=70"
            className="OTPImage"
          />
          <img
            src="https://images.ctfassets.net/ss5kfr270og3/75IMCbX1Docj4Za6JnR3jM/813646358fd58efd350c43c55af275cc/IDV-Wealth.png?fm=webp&q=70"
            className="optImage2"
          />
          <div>
            <div className="OTPdetails">
              <h1>ACCOUNT VERIFICATION</h1>
            </div>
            <div>
              <ul className="OTPList">
                <li>
                  Enter the One-Time Password (OTP) sent to your email number to
                  verify your account. If you did not receive the OTP, Please
                  note that the OTP is valid only for a period of 5 minutes.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="OTPInput">
          <form onSubmit={handleSubmit}>
            <div className="OTPInputContainer">
              <div className="OTPHeader">
                <h1 className="OTPHeaderText">
                  Verify Your <span>Account</span>
                </h1>
                <p>
                  don't have an account? <Link to={"/signUp"}>Sign up</Link>
                </p>
              </div>
              <div>
                <div className="rowInput">
                  <div className="columnInput">
                    <label>OTP</label>
                    <input
                      onBlur={handleBlur()}
                      onChange={handleChange()}
                      value={otpCode.otp || ""}
                      name="otp"
                      type="text"
                      className="OtpinputGroup"
                      placeholder="OTP"
                    />
                    {errors.otp && (
                      <InputErrorLabel errorMessage={errors.otp} />
                    )}
                    <InputInfoLabel infoMessage={message} />
                  </div>
                </div>
              </div>
              <div className="OTPButtonWrapper">
                <button type="submit" className="OTPButton cursor">
                  VERIFY
                </button>
              </div>
              <p>
                didn't get otp? <a href="#">Resend</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
