import React from "react";
import "./Testimonial.css";

const Testimonial: React.FC = () => {
  return (
    <div className="testimonialContainer">
      <div className="testimonialWrapper">
        <div className="appImageWrapper">
          <img
            src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad929306c062db6_sending-text.png"
            className="appImage"
          />
        </div>
        <div className="testimonialCardContanier">
          <div className="testimonialCard">
            <div className="starsandflag">
              <img
                src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9293965062d89_star-rating.svg"
                alt="stars"
                className="stars"
              />
              <img
                src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9295d1d062d83_usa-flag.svg"
                alt="countryflag"
                className="countryflag"
              />
            </div>
            <div className="testimonialText">
              <p>
                I find it reliable and fast and it helps me save cash on
                <br />
                transactions. Kudos to the customer care service.
              </p>
            </div>
            <div className="testimonialLocation">
              App store review, 10 September, 2021
            </div>
          </div>
          <div className="testimonialCard">
            <div className="starsandflag">
              <img
                src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9293965062d89_star-rating.svg"
                alt="stars"
                className="stars"
              />
              <img
                src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9295d1d062d83_usa-flag.svg"
                alt="countryflag"
                className="countryflag"
              />
            </div>
            <div className="testimonialText">
              <p>
                The best app to send and receive money from friends, family and
                <br />
                associates across Africa.
              </p>
            </div>
            <div className="testimonialLocation">
              App store review, 10 September, 2021
            </div>
          </div>
          <div className="testimonialCard">
            <div className="starsandflag">
              <img
                src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9293965062d89_star-rating.svg"
                alt="stars"
                className="stars"
              />
              <img
                src="https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad9295d1d062d83_usa-flag.svg"
                alt="countryflag"
                className="countryflag"
              />
            </div>
            <div className="testimonialText">
              <p>
                So fast and very easy to transfer money to Nigeria.
                <br /> I love it!
              </p>
            </div>
            <div className="testimonialLocation">
              App store review, 10 September, 2021
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
