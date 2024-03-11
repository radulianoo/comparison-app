import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Customer5 from "../../utils/images/customer-5.jpg";
import Customer2 from "../../utils/images/customer-2.jpg";
import Customer3 from "../../utils/images/customer-3.jpg";
import Customer4 from "../../utils/images/customer-4.jpg";

const stories = [
  {
    id: 1,
    img: [Customer5],
    title: "Cumparaturi in rate",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis amet asperiores eius alias ipsum dignissimos, fugit similique illum eveniet quisquam. Dolor, obcaecati error assumenda repudiandae unde quisquam ad nulla officiis!",
  },
  {
    id: 2,
    img: [Customer2],
    title: "Cumparaturi online",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis amet asperiores eius alias ipsum dignissimos, fugit similique illum eveniet quisquam. Dolor, obcaecati error assumenda repudiandae unde quisquam ad nulla officiis!",
  },
  {
    id: 3,
    img: [Customer3],
    title: "Viata la banca, ca tot traim in era digitala",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis amet asperiores eius alias ipsum dignissimos, fugit similique illum eveniet quisquam. Dolor, obcaecati error assumenda repudiandae unde quisquam ad nulla officiis!",
  },
  {
    id: 4,
    img: [Customer4],
    title: "Astia sunt chiar misto",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis amet asperiores eius alias ipsum dignissimos, fugit similique illum eveniet quisquam. Dolor, obcaecati error assumenda repudiandae unde quisquam ad nulla officiis!",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Blog</h1>
          <p className="text-center w-75 mb-5">
            Aici vrem sa aducem toate povestile despre experienta voastra,
            experienta de client si utilizator al produselor bancare.
          </p>
        </div>
      </header>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {stories.map((story) => (
              <div key={story.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={story.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="fs-2 mb-4">
                        {story.title}
                      </Card.Title>
                      <Card.Text>{story.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
