import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import DoctorForm from './doctorform'; // Assurez-vous que ce fichier existe et est bien importé

const DoctorList = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, nom: "Brayek", prenom: "Amine", email: "amine.brayek@hotmail.fr", specialite: "Généraliste", adresse: "Andalous, Ariana" },
    // Ajoutez d'autres médecins ici
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDeleteDoctor = (doctorId) => {
    setDoctors(doctors.filter(doctor => doctor.id !== doctorId));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedDoctor(null);
    setIsEditing(false);
  };

  const handleSaveDoctor = (doctor) => {
    if (isEditing) {
      setDoctors(doctors.map(d => d.id === doctor.id ? doctor : d));
    } else {
      // Ajouter un nouvel médecin avec un nouvel ID
      setDoctors([...doctors, { ...doctor, id: doctors.length + 1 }]);
    }
    handleCloseForm();
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowForm(true)}>Ajouter un Médecin</Button>
      <Table striped bordered hover className="my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Spécialité</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.nom}</td>
              <td>{doctor.prenom}</td>
              <td>{doctor.email}</td>
              <td>{doctor.specialite}</td>
              <td>{doctor.adresse}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditDoctor(doctor)}>Modifier</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteDoctor(doctor.id)}>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showForm && (
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>{isEditing ? 'Modifier le Médecin' : 'Ajouter un Médecin'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DoctorForm
              doctor={selectedDoctor}
              onSave={handleSaveDoctor}
              onClose={handleCloseForm}
              isEditing={isEditing}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default DoctorList;
