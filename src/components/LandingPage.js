import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.png"; // Import image
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Houseplant Haven</h1>
      <p>Bringing Nature Indoors</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
