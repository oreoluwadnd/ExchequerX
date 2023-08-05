import React from "react";
import "./SolutionLeft.css";

type pageData = {
  imgL: string;
  imgS: string;
  header: string;
  text: string;
};

const SolutionLeft: React.FC<pageData> = ({ imgL, header, text, imgS }) => {
  return (
    <div className="solutionWrapper">
      <div className="solution">
        <div className="solutionText">
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
        <div className="solutionImgDiv">
          <img src={imgS} className="feesImage" />
          <img src={imgL} className="solutionImg" />
        </div>
      </div>
    </div>
  );
};
export default SolutionLeft;
