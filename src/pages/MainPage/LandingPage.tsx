import React from "react";
import "./LandingPage.css";
import SolutionPage from "../../components/Solution/SolutionPage";
import Nav from "../../components/Nav/Nav";
import PageDetails from "../../components/Pagedetails/PageDetails";
import Testimonial from "../../components/Testimonial/Testimonial";
import Marquee from "../../components/Marquee/Marquee";
import Mission from "../../components/Content/Mission";
import Footer from "../../components/Footer/Foooter";

const LandingPage: React.FC = () => {
  return (
    <div className="landingContainer">
      <Nav />
      <PageDetails />
      <Marquee />
      <Mission />
      <SolutionPage />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
