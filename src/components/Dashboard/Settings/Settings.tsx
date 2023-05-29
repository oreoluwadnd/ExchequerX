import React from "react";
import "./Settings.css";
import PageHeader from "../../UI/PageHeader/PageHeader";
import SideBar from "../SideBar/SideBar";
import { AiFillSetting, AiFillEdit, AiOutlineSave } from "react-icons/ai";
import { FiLogOut, FiSave } from "react-icons/fi";
import { MdDelete, MdDangerous } from "react-icons/md";

const Settings = () => {
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
                src="https://assets.codepen.io/285131/almeria-avatar.jpeg"
                className="settingsPageContentHeaderImg"
              />
              <AiFillEdit className="settingsImgEditIcon" />
            </div>
          </div>
          <div className="settingsPageContentForm">
            <div className="settingsPageCon">
              <div className="settingsInputGroup">
                <div className="settingsInputLabel">
                  <label htmlFor="name">First Name</label>
                  <span>Change your firstname</span>
                </div>
                <input type="text" id="name" className="settingsInput" />
              </div>
              <div className="settingsInputGroup">
                <div className="settingsInputLabel">
                  <label htmlFor="name">Last Name</label>
                  <span>Change your lastname</span>
                </div>
                <input type="text" id="name" className="settingsInput" />
              </div>
              <div className="settingsInputGroup">
                <div className="settingsInputLabel">
                  <label htmlFor="name">Phone</label>
                  <span>Change your phone</span>
                </div>
                <input type="text" id="name" className="settingsInput" />
              </div>
              <div className="settingsInputGroup">
                <div className="settingsInputLabel">
                  <label htmlFor="name">Email</label>
                  <span>Change your email</span>
                </div>
                <input type="text" id="name" className="settingsInput" />
              </div>
              <div className="settingsInputGroup">
                <div className="settingsInputLabel">
                  <label htmlFor="name">Tag</label>
                  <span>Change your Tag</span>
                </div>
                <input type="text" id="name" className="settingsInput" />
              </div>
              {/* <div className="settingsInputGroup">
                <div className="settingsInputLabel">
                  <label htmlFor="name">Confirm Password</label>
                  <span>Confirm Password</span>
                </div>
                <input type="text" id="name" className="settingsInput" />
              </div> */}
              <div className="settingsInputSave">
                <FiSave size={20} />
                <span>Save</span>
              </div>
              <div>
                <div className="settingsPageContentFooter">
                  <div className="settingsPageContentFooterIcon">
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
        </div>
      </div>
    </SideBar>
  );
};

export default Settings;
