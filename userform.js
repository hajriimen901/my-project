import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const UserForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre les données du formulaire
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un Utilisateur</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez l'email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="secondary" onClick={onClose}>Fermer</Button>
          <Button variant="primary" type="submit">Soumettre</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserForm;
