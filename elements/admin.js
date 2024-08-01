import React, { useState } from 'react';
import { Container, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import UserList from './user'; // Assurez-vous que ces composants existent
import DoctorList from './DoctorList'; // Assurez-vous que ces composants existent

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // Par défaut, afficher le tableau de bord

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <Nav variant="tabs" defaultActiveKey="dashboard" className="my-3">
        <Nav.Item>
          <Nav.Link
            eventKey="dashboard"
            onClick={() => handleNavigation('dashboard')}
            active={activeSection === 'dashboard'}
          >
            Tableau de Bord
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="users"
            onClick={() => handleNavigation('users')}
            active={activeSection === 'users'}
          >
            Utilisateurs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="doctors"
            onClick={() => handleNavigation('doctors')}
            active={activeSection === 'doctors'}
          >
            Médecins
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {activeSection === 'dashboard' && (
        <div>
          <h1>Tableau de Bord</h1>
          <Row>
            <Col>
              <Card>
                <Card.Header>Statistiques</Card.Header>
                <Card.Body>
                  {/* Contenu du tableau de bord */}
                  <p>Résumé des statistiques</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>Résumé</Card.Header>
                <Card.Body>
                  {/* Autres informations du tableau de bord */}
                  <p>Résumé des informations importantes</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
      
      {activeSection === 'users' && <UserList />}
      {activeSection === 'doctors' && <DoctorList />}
    </Container>
  );
};

export default Admin;
