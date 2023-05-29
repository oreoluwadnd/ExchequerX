import React from "react";
import { Link } from "react-router-dom";
import "./PageDetails.css";

const PageDetails: React.FC = () => {
  return (
    <div className="page-details">
      <div className="pageDetailsText">
        <span className="pageDetailsTitle">
          <h1>The safer Online banking made easy</h1>
        </span>
        <div className="pageDetailsDescription">
          <span className="pageDetailsChecks">
            <img src="https://www.chime.com/wp-content/uploads/2022/07/check.png" />
            <p>Get paid faster with smart invoicing</p>
          </span>
          <span className="pageDetailsChecks">
            <img src="https://www.chime.com/wp-content/uploads/2022/07/check.png" />
            <p>Avoid hassle with automated Expenses</p>
          </span>
          <span className="pageDetailsChecks">
            <img src="https://www.chime.com/wp-content/uploads/2022/07/check.png" />
            <p>Manage money 24/7 with the #1 most loved banking app</p>
          </span>
          <span className="pageDetailsChecks">
            <img src="https://www.chime.com/wp-content/uploads/2022/07/check.png" />
            <p>No minimum balance requirement or monthly service fees</p>
          </span>
        </div>

        <Link to={"/signUp"} className="detailsButton">
          <span>GET STARTED</span>
        </Link>
      </div>
      <div className="videoContainer">
        <img
          src="  https://www.chime.com/wp-content/uploads/2021/07/pay-anyone-desktop.png"
          className="videoImage1"
        />
        <img
          src="https://wise.com/web-art/assets/illustrations/lock-large@1x.webp"
          className="videoImage2"
        />

        <video
          className="pageVideo"
          autoPlay
          loop
          muted
          playsInline
          src="https://wise.com//static-assets/app/_next/static/media/3d-globe-ef25c9826dc863a57ed636ca87da7d9b.mp4"
          poster="https://wise.com//static-assets/app/_next/static/media/poster.ff25224b.jpg"
        >
          <source
            src="https://wise.com//static-assets/app/_next/static/media/3d-globe-72a5cb0edcbe31cf385aa34558b1c435.webm"
            type="video/webm; codecs=av01.0.12M.08.0.110.01.01.01.0"
          />
          <source
            src="https://wise.com//static-assets/app/_next/static/media/3d-globe-ef25c9826dc863a57ed636ca87da7d9b.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default PageDetails;
