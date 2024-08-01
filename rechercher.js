import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Rechercher() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="text"
        placeholder="Rechercher"
        className="me-2" // Ajoute un espace entre le champ et le bouton
      />
      <Button variant="primary">Recherche
        r</Button>
    </Form>
  );
}

export default Rechercher;



