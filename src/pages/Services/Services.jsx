import React from "react";
import "./Services.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CardIng from "../../utils/images/card-1.webp";
import CardCeb from "../../utils/images/card-2.png";
import CardBcr from "../../utils/images/card-4.png";
import CardBrd from "../../utils/images/card-5.png";
import CardBtt from "../../utils/images/card-6.png";
import CardUni from "../../utils/images/card-7.png";
import CardRev from "../../utils/images/card-8.png";
import CardCec from "../../utils/images/card-9.png";

const cards = [
  {
    id: 1,
    img: [CardIng],
    title: "ING Credit Card",
    description: "Refinanteaza orice credit in rate fara dobanda.",
  },
  {
    id: 2,
    img: [CardCeb],
    title: "Credit Europpe Credit Card",
    description: "Plateste oriunde in Romania in 24 de rate fara dobanda.",
  },
  {
    id: 3,
    img: [CardBcr],
    title: "BCR Credit Card",
    description: "Plateste la Ikea in 36 de rate fara dobanda.",
  },
  {
    id: 4,
    img: [CardBrd],
    title: "BRD Credit Card",
    description: "Plateste orice online in 6 rate fara dobanda.",
  },
  {
    id: 5,
    img: [CardBtt],
    title: "BT Credit Card",
    description:
      "Retrage de la orice bancomat si ai 56 de zile perioada de gratie.",
  },
  {
    id: 6,
    img: [CardUni],
    title: "Unicredit Credit Card",
    description:
      "Plateste cu cardul la POS si acumuleaza mile pentru urmatoarea vancanta.",
  },
  {
    id: 7,
    img: [CardRev],
    title: "Revolut Credit Card",
    description:
      "Cardul de credit din telefonul tau, ai asigurare la orice cumperi si rate oriunde in lume.",
  },
  {
    id: 8,
    img: [CardCec],
    title: "CEC Credit Card",
    description:
      "Cardul traditional , ai perioada de gratie de pana la 45 de zile.",
  },
];

function Services() {
  return (
    <div className="services-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Produsele noastre 👀</h1>
          <p className="text-center w-75 mb-5">
            Am zis ca democratiazam informatia, ei bine asta inseamna sa iti
            eliminam drumurile, clickurile si sa te scutim de vanzatorii care
            sunt platiti la comision. Acum le ai aici intr-un singur ecran.
            Speram sa iti placa 🥹, dar gandeste-te ca aceasta este prima noastra
            iteratie.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          {cards.map((card) => (
            <div key={card.id} className="col-lg-6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button variant="primary">Afla mai multe</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
