import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import UserForm from './userform'; // Assurez-vous que ce fichier existe et est bien importé

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, nom:  "amene allah Brayek", email: "amanallahbrayek@gmail.com" },
    // Ajoutez d'autres utilisateurs ici
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedUser(null);
    setIsEditing(false);
  };

  const handleSaveUser = (user) => {
    if (isEditing) {
      setUsers(users.map(u => u.id === user.id ? user : u));
    } else {
      // Ajouter un nouvel utilisateur avec un nouvel ID
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    handleCloseForm();
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowForm(true)}>Ajouter un Utilisateur</Button>
      <Table striped bordered hover className="my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditUser(user)}>Modifier</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showForm && (
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>{isEditing ? 'Modifier l\'Utilisateur' : 'Ajouter un Utilisateur'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm
              user={selectedUser}
              onSave={handleSaveUser}
              onClose={handleCloseForm}
              isEditing={isEditing}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default UserList;
