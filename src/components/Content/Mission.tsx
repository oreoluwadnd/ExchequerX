import React from "react";
import "./Mission.css";

const Mission: React.FC = () => {
  return (
    <div className="mission">
      <div className="missionContainer">
        <img
          src="https://images.ctfassets.net/ss5kfr270og3/6wjeY5NdPn9aKMF2Xq6qit/66611877a0dd73b53714c5246a3db933/homepage-control-48_2x.png?fm=webp&w=96&q=90"
          className="missionImage"
        />
        <h3>Connect in seconds</h3>
        <p>
          Plaid helps people securely connect and share data from their
          financial institutions with the apps they love.
        </p>
      </div>
      <div className="missionContainer">
        <img
          src="https://images.ctfassets.net/ss5kfr270og3/1WN1hLmZWsPz01hKCaEChR/7399cbe862ca57e366c35b563f35e90a/homepage-speed-connect-48_2x.png?fm=webp&w=96&q=90"
          className="missionImage"
        />
        <h3>Control connections</h3>
        <p>
          Plaid Portal allows people to view and control the financial
          connections they’ve made through Plaid.
        </p>
      </div>
      <div className="missionContainer">
        <img
          src="https://images.ctfassets.net/ss5kfr270og3/2gpptui3845feYhyvCKv8z/b397b43d23fe954d4ab0ed0baa5954da/homepage-secure-48_2x.png?fm=webp&w=96&q=90"
          className="missionImage"
        />
        <h3>Designed for security</h3>
        <p>
          We keep personal information safe with security practices that are
          designed to meet or exceed industry standards.
        </p>
      </div>
    </div>
  );
};

export default Mission;
