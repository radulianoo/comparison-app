import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Salut 👋</h2>
          <h1 className="text-center fw-semibold mb-5">Tu ce compari ?</h1>
          <p className="mb-5">
            Mersul la banca este ca la doctor: nu stii cat dureaza, cat te costa
            sau cat o sa te doara. Ei bine acum totul este mai simplu, ai totul
            la un loc.{" "}
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/services">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Descopera
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Sa discutam
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
