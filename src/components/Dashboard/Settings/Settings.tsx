import React from "react";
import "./Settings.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../features/store";
import { useForm } from "../../../hooks/useForm";
import PageHeader from "../../UI/PageHeader/PageHeader";
import InputErrorLabel from "../../../components/UI/InputErrorLabel/InputErrorLabel";
import SideBar from "../SideBar/SideBar";
import {
  deleteUserApi,
  updateUserApi,
  logoutApi,
} from "../../../features/auth/authApi";
import { AiFillSetting, AiFillEdit, AiOutlineSave } from "react-icons/ai";
import { FiLogOut, FiSave } from "react-icons/fi";
import { MdDelete, MdDangerous } from "react-icons/md";

const Settings = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const settingsFormData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  };
  const settingsErrorMessage = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const {
    data: settingsData,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initailErrorMessage: settingsErrorMessage,
    initialValues: settingsFormData,
    sanitizeFn: (value) => {
      return value.trim();
    },
    validations: {
      firstName: {
        required: {
          value: true,
          message: "First Name is required",
        },
      },
      lastName: {
        required: {
          value: true,
          message: "Last Name is required",
        },
      },
      phone: {
        required: {
          value: true,
          message: "Phone is required",
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
    },
    onSubmit: () => {
      console.log(settingsData);
      dispatch(updateUserApi(settingsData));
    },
  });

  const handleLogout = () => {
    dispatch(logoutApi()).then(navigate("/login"));
  };

  return (
    <SideBar>
      <div className="settingsPage">
        <PageHeader title={"Settings"} icon={AiFillSetting} />
        <div className="settingPageContent">
          <div className="settingsPageContentHeader">
            <div className="settingsPageContentHeaderTitle">
              <h5>Update</h5>
              <p>
                Update profile *don't forget to click update button after
                changes*
              </p>
            </div>
            <div className="settingsPageContentImgDiv">
              <img
                src="https://res.cloudinary.com/aore/image/upload/v1685310955/maukjciktevcscxkhxwg.png"
                className="settingsPageContentHeaderImg"
              />
              <AiFillEdit className="settingsImgEditIcon" />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="settingsPageContentForm">
              <div className="settingsPageCon">
                <div className="settingsInputGroup">
                  <div className="settingsInputLabel">
                    <label htmlFor="name">First Name</label>
                    <span>
                      {errors.firstName ? (
                        <InputErrorLabel errorMessage={errors.firstName} />
                      ) : (
                        "Change your firstname"
                      )}
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="settingsInput"
                    name="firstName"
                    onBlur={handleBlur()}
                    onChange={handleChange()}
                    value={settingsData.firstName || ""}
                  />
                </div>
                <div className="settingsInputGroup">
                  <div className="settingsInputLabel">
                    <label htmlFor="name">Last Name</label>
                    <span>
                      {errors.lastName ? (
                        <InputErrorLabel errorMessage={errors.lastName} />
                      ) : (
                        " Change your lastname"
                      )}
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="settingsInput"
                    name="lastName"
                    onBlur={handleBlur()}
                    onChange={handleChange()}
                    value={settingsData.lastName || ""}
                  />
                </div>
                <div className="settingsInputGroup">
                  <div className="settingsInputLabel">
                    <label htmlFor="name">Phone</label>
                    <span>
                      {" "}
                      {errors.phone ? (
                        <InputErrorLabel errorMessage={errors.phone} />
                      ) : (
                        "Change your phone"
                      )}
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="settingsInput"
                    name="phone"
                    onBlur={handleBlur()}
                    onChange={handleChange()}
                    value={settingsData.phone || ""}
                  />
                </div>
                <div className="settingsInputGroup">
                  <div className="settingsInputLabel">
                    <label htmlFor="name">Email</label>
                    <span>
                      {errors.email ? (
                        <InputErrorLabel errorMessage={errors.email} />
                      ) : (
                        "Change your email"
                      )}
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="settingsInput"
                    name="email"
                    onBlur={handleBlur()}
                    onChange={handleChange()}
                    value={settingsData.email || ""}
                  />
                </div>

                <button className="settingsInputSave" type="submit">
                  <FiSave size={20} />
                  <span>Save</span>
                </button>
                <div>
                  <div className="settingsPageContentFooter">
                    <div
                      className="settingsPageContentFooterIcon"
                      onClick={handleLogout}
                    >
                      <span>Logout</span>
                      <FiLogOut size={20} />
                    </div>
                    <div className="settingsPageContentFooterIcon">
                      <span>Delete Account</span>
                      <MdDelete size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SideBar>
  );
};

export default Settings;
