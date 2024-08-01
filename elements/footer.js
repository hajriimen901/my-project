import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Assurez-vous d'ajouter le CSS correspondant

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>À Propos</h5>
            <p>Allo Doctor est votre plateforme de confiance pour trouver et prendre rendez-vous avec des médecins qualifiés.</p>
          </Col>
          <Col md={4}>
            <h5>Liens Utiles</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Accueil</a></li>
              <li><a href="#admin" className="text-white">Admin</a></li>
              <li><a href="#questions" className="text-white">Questions</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: contact@allodoctor.com</p>
            <p>Téléphone: +216 12 345 678</p>
            <p>Adresse: 123 Rue Exemple, Tunis, Tunisie</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
