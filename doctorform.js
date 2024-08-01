import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ doctor, onSave, onClose, isEditing }) => {
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    prenom: '',
    email: '',
    specialite: '',
    adresse: ''
  });

  useEffect(() => {
    if (doctor) {
      setFormData({
        id: doctor.id,
        nom: doctor.nom,
        prenom: doctor.prenom,
        email: doctor.email,
        specialite: doctor.specialite,
        adresse: doctor.adresse
      });
    } else {
      setFormData({
        id: '',
        nom: '',
        prenom: '',
        email: '',
        specialite: '',
        adresse: ''
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nom && formData.prenom && formData.email && formData.specialite && formData.adresse) {
      onSave(formData);
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNom">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPrenom">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formSpecialite">
        <Form.Label>Spécialité</Form.Label>
        <Form.Control
          type="text"
          name="specialite"
          value={formData.specialite}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formAdresse">
        <Form.Label>Adresse</Form.Label>
        <Form.Control
          type="text"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="secondary" onClick={onClose} className="me-2">
        Fermer
      </Button>
      <Button variant="primary" type="submit">
        {isEditing ? 'Enregistrer' : 'Ajouter'}
      </Button>
    </Form>
  );
};

export default DoctorForm;
