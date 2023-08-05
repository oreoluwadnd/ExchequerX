import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { SignUpApi } from "../../../features/auth/authApi";
import { useAppDispatch, RootState } from "../../../features/store";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineGoogle, AiFillApple, AiFillFacebook } from "react-icons/ai";
import AuthMobileClose from "../AuthClose/AuthMobileClose";
import Modal from "../../../components/UI/Modal/Modal";
import Loader from "../../../components/UI/Loader/Loader";
import InputErrorLabel from "../../../components/UI/InputErrorLabel/InputErrorLabel";
import { useForm } from "../../../hooks/useForm";
import SignUpModal from "./SignUpModal";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const signUpFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const initailErrorMessage = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const {
    data: user,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initialValues: signUpFormData,
    initailErrorMessage: initailErrorMessage,
    validations: {
      firstName: {
        required: {
          value: true,
          message: "First name is required",
        },
        pattern: {
          value: "^[A-Za-z]*$",
          message: "No special characters or numbers.",
        },
      },
      lastName: {
        required: {
          value: true,
          message: "Last name is required",
        },
        pattern: {
          value: "^[A-Za-z]*$",
          message: "No special characters or numbers.",
        },
      },
      phone: {
        required: {
          value: true,
          message: "Phone number is required",
        },
        pattern: {
          //match all character and numbers nad symbol
          value: "(.*?)",
          message: "Phone number not valid",
        },
      },
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
      passwordConfirm: {
        required: {
          value: true,
          message: "Password confirmation is required",
        },
        custom: {
          compare: {
            isValid: (value: any, data: { password: any }) =>
              value === data.password,
            message: "Password confirmation does not match",
          },
        },
      },
    },

    sanitizeFn: (value) => {
      return value.trim();
    },
    onSubmit: () => {
      dispatch(SignUpApi(user));
    },
  });

  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
    console.log("oreoluwa");
  };

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <>
      {isLoading && (
        <Modal handleModal={handleModal}>
          <Loader />
        </Modal>
      )}
      {isSuccess && (
        <Modal handleModal={handleModal}>
          <SignUpModal successMessage={message} />
        </Modal>
      )}

      <div className="signup">
        <div className="signUpContainer">
          <AuthMobileClose />
          <div className="signUpText">
            <img
              src="https://images.ctfassets.net/ss5kfr270og3/1ZZuqLEhx3AmXsaiNqo7Fq/4e191b00ac3f6101d34e87491053ec70/Mission-IMG.png?fm=webp&q=70"
              className="signUpImage"
            />
            <img
              src="https://wise.com/web-art/assets/illustrations/jars-medium@2x.webp"
              className="signUpImage2"
            />
            <div>
              <div className="signupdetails">
                <h1>Create your Exchequer account</h1>
                <p>By creating a free account, you can:</p>
              </div>
              <div>
                <ul className="signUpList">
                  <li>
                    <BsFillCheckCircleFill color="#FBE868" />{" "}
                    <span>Access our bank APIs</span>
                  </li>
                  <li>
                    <BsFillCheckCircleFill color="#FBE868" />{" "}
                    <span>Use sample data to try out our APIs</span>
                  </li>
                  <li>
                    <BsFillCheckCircleFill color="#FBE868" />{" "}
                    <span>
                      Use real data from up to 100 real financial accounts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="signUpInput">
            <form onSubmit={handleSubmit}>
              <div className="signUpInputContainer">
                <div className="signUpHeader">
                  <h1 className="signUpHeaderText">
                    Create a Secure <span>Account</span>
                  </h1>
                  <p>
                    already have an account? <Link to={"/login"}>Sign in</Link>
                  </p>
                </div>

                <div>
                  <div className="SignUprowInput">
                    <div className="SignUpcolumnInput">
                      <div className="InputLabelWrapper">
                        <label>First name</label>
                        {/* <InputErrorLabel errorMessage={errors.firstName} /> */}
                      </div>
                      <input
                        className={`${
                          errors.firstName ? "signUpError" : ""
                        } SignUpinputGroup`}
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange()}
                        type="text"
                        onBlur={handleBlur()}
                        value={user.firstName}
                      />
                      <InputErrorLabel errorMessage={errors.firstName} />
                    </div>
                    <div className="SignUpcolumnInput">
                      <div className="InputLabelWrapper">
                        <label>Last name</label>
                        {/* <InputErrorLabel errorMessage={errors.lastName} /> */}
                      </div>
                      <input
                        className={`${
                          errors.lastName ? "signUpError" : ""
                        } SignUpinputGroup`}
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                        onBlur={handleBlur()}
                        onChange={handleChange()}
                        value={user.lastName}
                      />
                      <InputErrorLabel errorMessage={errors.lastName} />
                    </div>
                  </div>

                  <div className="SignUprowInput">
                    <div className="SignUpcolumnInput">
                      <div className="InputLabelWrapper">
                        <label>Email</label>
                        {/* <InputErrorLabel errorMessage={errors.email} /> */}
                      </div>
                      <input
                        className={`${
                          errors.email ? "signUpError" : ""
                        } SignUpinputGroup`}
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onBlur={handleBlur()}
                        onChange={handleChange()}
                        type="text"
                      />
                      <InputErrorLabel errorMessage={errors.email} />
                    </div>
                    <div className="SignUpcolumnInput">
                      <div className="InputLabelWrapper">
                        <label>Phone</label>
                        {/* <InputErrorLabel errorMessage={errors.phone} /> */}
                      </div>
                      <input
                        className={`${
                          errors.phone ? "signUpError" : ""
                        } SignUpinputGroup`}
                        placeholder="Phone"
                        name="phone"
                        onBlur={handleBlur()}
                        onChange={handleChange()}
                        value={user.phone}
                        type="text"
                      />
                      <InputErrorLabel errorMessage={errors.phone} />
                    </div>
                  </div>
                  <div className="SignUprowInput">
                    <div className="SignUpcolumnInput">
                      <div className="InputLabelWrapper">
                        <label>Password</label>
                        {/* <InputErrorLabel errorMessage={errors.password} /> */}
                      </div>
                      <input
                        type="password"
                        className={`${
                          errors.password ? "signUpError" : ""
                        } SignUpinputGroup`}
                        placeholder="Password"
                        name="password"
                        onBlur={handleBlur()}
                        onChange={handleChange()}
                        value={user.password}
                      />
                      <InputErrorLabel errorMessage={errors.password} />
                    </div>
                    <div className="SignUpcolumnInput">
                      <div className="InputLabelWrapper">
                        <label>Confirm Passsword</label>
                      </div>
                      <input
                        type="password"
                        className={`${
                          errors.passwordConfirm ? "signUpError" : ""
                        } SignUpinputGroup`}
                        placeholder="Confirm Passsword"
                        name="passwordConfirm"
                        onBlur={handleBlur()}
                        onChange={handleChange()}
                        value={user.passwordConfirm}
                      />
                      <InputErrorLabel errorMessage={errors.passwordConfirm} />
                    </div>
                  </div>
                </div>
                <div className="signUpButtonWrapper">
                  <button type="submit" className="signUpButton cursor">
                    Sign up
                  </button>
                </div>

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
    </>
  );
};

export default SignUp;
