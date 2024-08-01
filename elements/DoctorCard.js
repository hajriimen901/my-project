import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import AppointmentScheduler from './Agenda'; // Importer le composant AppointmentScheduler

function DoctorCard({ doctor }) {
  const [showScheduler, setShowScheduler] = useState(false);

  const handleScheduleClick = () => {
    setShowScheduler(prevShowScheduler => !prevShowScheduler);
  };

  return (
    <Card className="doctor-card" style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Body>
        <strong>Dr.</strong> <br />
        <Card.Title>{doctor.nom} {doctor.prenom}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{doctor.specialite}</Card.Subtitle>
        <Card.Text>
          <strong>Email:</strong> {doctor.email} <br />
          <strong>Téléphone:</strong> {doctor.telephone} <br />
          <strong>Adresse:</strong> {doctor.adresse} <br />
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={handleScheduleClick}
          aria-expanded={showScheduler}
          aria-controls="appointment-scheduler"
        >
          {showScheduler ? 'Annuler' : 'Prendre Rendez-vous'}
        </Button>
        {showScheduler && <AppointmentScheduler doctor={doctor} id="appointment-scheduler" />}
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;
