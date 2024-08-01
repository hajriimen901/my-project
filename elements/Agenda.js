import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AppointmentScheduler({ doctor }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rendez-vous pris avec:', doctor.nom, doctor.prenom);
    // Ajoutez ici la logique pour réserver un rendez-vous
  };

  return (
    <div className="mt-3">
      <h5>Prendre rendez-vous avec Dr {doctor.nom}</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>
        <Form.Group controlId="time">
          <Form.Label>Heure</Form.Label>
          <Form.Control type="time" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Confirmer
        </Button>
      </Form>
    </div>
  );
}

export default AppointmentScheduler;
