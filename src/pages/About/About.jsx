import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutUsSection from "../../utils/images/community-photo.jpg";

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Despre noi</h1>
          <p className="text-center w-75 mt-15">
            Cateva cuvinte despre noi: o gasca de bancheri care pun clientul pe
            primul plan. Credem ca diversitatea inseamna diferit, ei si cand e
            diferit inseamna ca innovezi 🚀.
          </p>
        </div>
      </header>
    </div>
  );
}

export default About;
