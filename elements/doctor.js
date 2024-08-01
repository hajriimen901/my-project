import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import DoctorForm from './doctorform';

const DoctorList = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddDoctor = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleAddDoctor}>Ajouter un Médecin</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemple de données. Remplacez-les par les données réelles */}
          <tr>
            <td>1</td>
            <td>Dr. Smith</td>
            <td>Cardiologue</td>
            <td>smith@example.com</td>
            <td>
              <Button variant="warning">Modifier</Button>{' '}
              <Button variant="danger">Supprimer</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      {showForm && <DoctorForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default DoctorList;
