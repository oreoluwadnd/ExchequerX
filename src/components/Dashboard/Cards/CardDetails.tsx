import React, { useState } from "react";
import "./CardDetails.css";
import { BsEye } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";

const CardDetails: React.FC = () => {
  return (
    <div className="CardDetailsContainer">
      <div className="CardDetailsHeader">
        <div className="CardDetailsHeaderLeft">
          <p className="CardDetailsHeaderText">Card Details</p>
        </div>
        <div className="CardDetailsShow">
          <BsEye size={0} />
          <p>SHOW</p>
        </div>
      </div>
      <div>
        <div className="CardInputGroup">
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">Card Name</p>
            <p className="CardDetailInfo">Emmanuel Oreoluwa</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">Card Number</p>
            <p className="CardDetailInfo">**** **** **** 1234</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
        </div>
        <div className="CardInputGroup">
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">Expiry Date</p>
            <p className="CardDetailInfo">03/2026</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">CVC</p>
            <p className="CardDetailInfo">12345</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
        </div>
        <div className="CardInputGroup">
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">Billing Address</p>
            <p className="CardDetailInfo">678 Joysticks Road RWE 908-3</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">City</p>
            <p className="CardDetailInfo">New York</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
        </div>
        <div className="CardInputGroup">
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">State</p>
            <p className="CardDetailInfo">Delaware</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
          <div className="CardDetailsSingleInput">
            <p className="CardDetailTitle">Zip Code</p>
            <p className="CardDetailInfo">19380</p>
            <BiCopy className="CardCopyIcon" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
