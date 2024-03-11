import React from "react";
import "./FaqSection.css";
import Accordion from "react-bootstrap/Accordion";

function FaqSection() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Intrebari frecvente
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo
          cum magni tempora et praesentium facere in nobis obcaecati ex facilis
          molestiae possimus officia corporis, laudantium numquam, odio porro
          similique!
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Prima intrebare</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              quo cum magni tempora
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>A doua intrebare?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              quo cum magni tempora
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Alta intrebare?🙄</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              quo cum magni tempora
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqSection;
