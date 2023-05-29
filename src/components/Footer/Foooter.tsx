import React from "react";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footerContainer">
      <div className="footerhead">
        <div className="footerLogo">
          {/* <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929a04e062dde_chipper-logo-white.svg"
            loading="lazy"
            alt=""
          /> */}
        </div>
        <div>
          <h4>How Can We help?</h4>
        </div>
      </div>
      <div>
        <ul className="footerLinks">
          <li>Products</li>
          <li>Support</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
      </div>
      <hr className="divider" />
      <div className="footerBottom">
        <div className="footerBottomLeft">
          <p>© 2023 Exchequer. All rights reserved.</p>
        </div>

        <div className="socialLinks">
          <a href="https://github.com/oreoluwadnd/ExchequerX" target="_blank">
            <FaGithubSquare size={25} color="white" />
          </a>
          <a href="">
            <FaExternalLinkSquareAlt size={25} color="white" target="_blank" />
          </a>
          <a href="https://www.twitter.com/oreoluwadnd" target="_blank">
            <FaTwitterSquare size={25} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
