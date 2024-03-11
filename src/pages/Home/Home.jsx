import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartContributingImg from "../../utils/images/start-contributing-photo.jpg";
import FaqSection from "../../components/FaqSection/FaqSection";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Carduri de cumparaturi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },

  {
    id: 2,
    img: [Blog2Img],
    title: "Carduri virtuale",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Carduri cu rate oriunde in lume",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

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
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Sa discutam
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">{new Date().getFullYear()}</h2>
              <p>
                Este anul in care democratizam informatia. De anul acesta
                incepem sa construim o comunitate in care informatia este la
                indemana si fiecare dintre noi poate sa isi expuna experienta cu
                produsele bancare.
              </p>
              <Link to="/services">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Contribuie si tu
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={StartContributingImg}
                className="img-fluid rounded-3"
                alt="community-photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <FaqSection />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Ultimele contributii pe blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Citeste mai multe experiente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
