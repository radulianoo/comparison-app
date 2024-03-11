import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semiblod">Hai sa vorbim 📩</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
            accusantium ipsa, iure perferendis rerum tempora nesciunt unde
            mollitia fugit, quidem, omnis incidunt molestiae necessitatibus iste
            libero quam repellat porro?
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Prenume</Form.Label>
              <Form.Control placeholder="Prenumele tau" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Nume</Form.Label>
              <Form.Control placeholder="Numele tau" />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Adresa ta de email" />
            <Form.Text className="text-muted">
              Adresa ta de email ramane doar la noi 🔒
            </Form.Text>
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Locatia ta</Form.Label>
              <Form.Select defaultValue="location">
                <option>Bucuresti</option>
                <option>Timisoara</option>
                <option>Cluj</option>
                <option>Iasi</option>
                <option>Craiova</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Comentariul tau</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger btn-lg" type="submit">
            Trimite
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
