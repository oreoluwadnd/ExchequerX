import React, { useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../features/store";
import { LoginApi } from "../../../features/auth/authApi";
import Modal from "../../../components/UI/Modal/Modal";
import Loader from "../../../components/UI/Loader/Loader";
import { useForm } from "../../../hooks/useForm";
import InputErrorLabel from "../../../components/UI/InputErrorLabel/InputErrorLabel";
import { BsFillArrowLeftSquareFill, BsFillBellFill } from "react-icons/bs";
import { AiOutlineGoogle, AiFillApple, AiFillFacebook } from "react-icons/ai";
import AuthMobileClose from "../AuthClose/AuthMobileClose";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    if (isSuccess && user) {
      navigate("/dashboard");
    }
    console.log("isSuccess", user);
  }, [isSuccess]);
  const loginFormData = {
    email: "",
    password: "",
  };
  const loginErrorMessage = {
    email: "",
    password: "",
  };

  const {
    data: loginData,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initailErrorMessage: loginErrorMessage,
    initialValues: loginFormData,
    sanitizeFn: (value) => {
      return value.trim();
    },
    validations: {
      email: {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
          message: "Email is invalid",
        },
      },
      password: {
        required: {
          value: true,
          message: "Password is required",
        },
        pattern: {
          value: "^(?=.*[a-z])[a-zA-Z\\d]{8,}$",
          message: "Password must be at least 8 characters",
        },
        custom: {
          length: {
            isValid: (value: any) => value.length > 6,
            message: "First name must be at least 8 characters",
          },
        },
      },
    },
    onSubmit: () => {
      dispatch(LoginApi(loginData));
    },
  });

  return (
    <div className="Login">
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      <div className="LoginContainer">
        <AuthMobileClose />
        <div className="LoginText">
          <div className="authBackIconWrapper">
            <BsFillArrowLeftSquareFill className="authBackIcon" />
          </div>

          <img
            src="https://images.ctfassets.net/ss5kfr270og3/46nXvKdmuwtz1QxynCJhAx/d052b4dbcf0c40b4f7524cfdfe3de7ce/Career-Header-globe-IMG.png?fm=webp&q=70"
            className="LoginImage"
          />
          <img
            src="https://wise.com/web-art/assets/illustrations/lock-medium@1x.webp"
            className="LoginImage2"
          />
          <div>
            <div className="Logindetails">
              <h1>Welcome back to Exchequer</h1>
            </div>
            <div>
              <ul className="LoginList">
                <li>
                  <BsFillBellFill color="#FBE868" />
                  <span>Pls don't share you information with anyone</span>
                </li>
                <li>
                  <BsFillBellFill color="#FBE868" />
                  <span>Exchequer will never ask for your password</span>
                </li>
                <li>
                  <BsFillBellFill color="#FBE868" />
                  <span>Avoid fradulent activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="LoginInput">
          <form onSubmit={handleSubmit}>
            <div className="LoginInputContainer">
              <div className="LoginHeader">
                <h1 className="LoginHeaderText">
                  Login To Your
                  <span>Account </span>
                </h1>
                <p>
                  don't have an account? <Link to={"/signUp"}>Sign up</Link>
                </p>
              </div>
              <div>
                <div className="LoginrowInput">
                  <div className="columnInput">
                    <label>Email/Phone</label>
                    <input
                      type="text"
                      className="LogininputGroup"
                      placeholder="Email/Phone"
                      name="email"
                      onBlur={handleBlur()}
                      onChange={handleChange()}
                      value={loginData.email || ""}
                    />
                    {errors.email && (
                      <InputErrorLabel errorMessage={errors.email} />
                    )}
                  </div>
                </div>
                <div className="LoginrowInput">
                  <div className="columnInput">
                    <label>Password</label>
                    <input
                      type="password"
                      className="LogininputGroup"
                      placeholder="Password"
                      name="password"
                      onBlur={handleBlur()}
                      onChange={handleChange()}
                      value={loginData.password || ""}
                    />
                    {errors.password && (
                      <InputErrorLabel errorMessage={errors.password} />
                    )}
                  </div>
                </div>
              </div>
              <div className="LoginButtonWrapper">
                <button className="LoginButton cursor" type="submit">
                  Login
                </button>
              </div>
              <p>
                Forgot password{" "}
                <Link to={"/resetpassword"}>Reset Password</Link>
              </p>
              <div className="socialLogin">
                <div className="socialLoginIcon socialHover1 cursor">
                  <AiOutlineGoogle size={30} className="googleIcon" />
                </div>
                <div className="socialLoginIcon socialHover2 cursor">
                  <AiFillApple size={30} className="appleIcon" />
                </div>
                <div className="socialLoginIcon socialHover3 cursor">
                  <AiFillFacebook size={30} className="facebookIcon" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
