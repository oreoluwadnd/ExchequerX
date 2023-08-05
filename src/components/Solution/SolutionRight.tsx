import React from "react";
import "./SolutionRight.css";

const SolutionRight: React.FC = () => {
  return (
    <div className="solutionRightWrapper">
      <div className="solutionRight">
        <div>
          <img
            src="https://plaid.com/_next/image?url=/assets/img/consumers/how-we-handle-data/data-art.png&w=1920&q=75"
            className="solutionRightImg"
          />
        </div>
        <div className="solutionRightText">
          <h2>
            As Fast and Easy as <br />
            Sending a Text
          </h2>
          <p>
            Pay friends and family fee-free, no matter what bank account they
            use. They can cash out instantly and securely, no sign-up needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionRight;
