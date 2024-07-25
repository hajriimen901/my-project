import React, { useState } from 'react';
import { Container, Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rechercher from './rechercher';

function ColorSchemesExample() {
  const [selectedGouvernorat, setSelectedGouvernorat] = useState('');
  const [userType, setUserType] = useState(''); // Type d'utilisateur sélectionné ('medecin' ou 'patient')
  const [isCreateFormVisible, setCreateFormVisible] = useState(false); // État pour afficher le formulaire de création de compte
  const [isLoginFormVisible, setLoginFormVisible] = useState(false); // État pour afficher le formulaire de connexion
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [numPortable, setNumPortable] = useState('');
  const [sexe, setSexe] = useState('');
  const [specialite, setSpecialite] = useState(''); // État pour la spécialité du médecin
  const [ville, setville] = useState('');

  const gouvernorats = [
    "Ariana", "Beja", "Ben Arous", "Nabeul", "Kairaouan", "Gafsa", "Kasserine", "Jandouba",
    "Siliana", "Sousse", "Monastir", "Zaghouane", "Tozeur", "Tataouine", "Tunis", "Mahdia",
    "Manouba", "Kébili", "Sfax", "Bizerte", "Kef", "Mednine", "Gabes", "Sidi bouzid"
  ];

  const specialites = [
    "Cardiologie", "Dermatologie", "Gynécologie", "Ophtalmologie", "Pédiatrie", "Psychiatrie", "Radiologie", "Urologie"
  ];

  const handleSearch = () => {
    console.log('Recherche en cours...');
  };

  const handleGouvernoratChange = (event) => {
    setSelectedGouvernorat(event.target.value);
    console.log('Gouvernorat sélectionné :', event.target.value);
  };

  const handleSelectUserType = (type) => {
    setUserType(type);
    setCreateFormVisible(false); // Réinitialiser l'état du formulaire de création
    setLoginFormVisible(false); // Réinitialiser l'état du formulaire de connexion
  };

  const handleToggleCreateForm = () => {
    setCreateFormVisible(true);
    setLoginFormVisible(false);
  };

  const handleToggleLoginForm = () => {
    setLoginFormVisible(true);
    setCreateFormVisible(false);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    console.log('Création de compte en cours pour le type :', userType);
    console.log('Nom :', nom);
    console.log('Email :', email);
    console.log('Mot de passe :', password);
    console.log('Date de naissance :', dateNaissance);
    console.log('Numéro de portable :', numPortable);
    console.log('Sexe :', sexe);
    console.log('Spécialité :', specialite);
    console.log('ville:', ville);
    // Logique pour créer le compte ici (envoyer les informations à un backend par exemple)
    // Réinitialisation après création
    setNom('');
    setEmail('');
    setPassword('');
    setDateNaissance('');
    setNumPortable('');
    setSexe('');
    setSpecialite('');
    setville('');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Connexion en cours pour le type :', userType);
    // Logique de connexion ici (envoyer les informations à un backend par exemple)
    // Réinitialisation ou redirection après connexion réussie
  };

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Allo Doctor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#admin">Admin</Nav.Link>
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#questions">Questions</Nav.Link>
            </Nav>
            <Rechercher />
            <Form className="d-flex">
              <Form.Select onChange={handleGouvernoratChange} value={selectedGouvernorat} className="ms-2" style={{ minWidth: '150px' }}>
                <option value="">Gouvernorat</option>
                {gouvernorats.map((gouvernorat, index) => (
                  <option key={index} value={gouvernorat}>{gouvernorat}</option>
                ))}
              </Form.Select>
              {/* Boutons pour sélectionner le type d'utilisateur */}
              <Button variant="primary" onClick={() => handleSelectUserType('medecin')} className="ms-auto">
                 compte Médecin
              </Button>
              <Button variant="primary" onClick={() => handleSelectUserType('patient')} className="ms-2">
                compte Patient
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      {/* Affichage des sous-boutons pour créer un compte ou j'ai un compte */}
      {userType && (
        <div className="text-center mt-4">
          {!isCreateFormVisible && !isLoginFormVisible && (
            <>
              <Button variant="primary" onClick={handleToggleCreateForm} className="me-2">
                Créer un compte
              </Button>
              <Button variant="primary" onClick={handleToggleLoginForm}>
                J'ai déjà un compte
              </Button>
            </>
          )}
        </div>
      )}

      {/* Affichage du formulaire de création de compte pour les médecins */}
      {isCreateFormVisible && userType === 'medecin' && (
        <Form onSubmit={handleCreate} className="mt-4">
          <Form.Group controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="prénom">
            <Form.Label>rénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre prénom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dateNaissance">
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control
              type="date"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="numPortable">
            <Form.Label>Numéro de portable</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre numéro de portable"
              value={numPortable}
              onChange={(e) => setNumPortable(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="sexe">
            <Form.Label>Sexe</Form.Label>
            <Form.Control
              as="select"
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
            >
              <option value="">Sélectionnez le sexe</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="ville">
            <Form.Label>ville  </Form.Label>
              <Form.Control 
              type="text"
              placeholder="Entrez votre ville"
              value={ville}
              onChange={(e) => setville(e.target.value)}
            />
            </Form.Group>
            <Form>
        <Form.Group controlId="gouvernorat">
          <Form.Label>Sélectionnez un gouvernorat :</Form.Label>
          <Form.Select onChange={handleGouvernoratChange} value={selectedGouvernorat}>
            <option value="">Choisissez un gouvernorat</option>
            {gouvernorats.map((gouvernorat, index) => (
              <option key={index} value={gouvernorat}>{gouvernorat}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
          <Form.Group controlId="specialite">
            <Form.Label>Spécialité</Form.Label>
            <Form.Select
              value={specialite}
              onChange={(e) => setSpecialite(e.target.value)}
            >
              <option value="">Sélectionnez une spécialité</option>
              {specialites.map((specialite, index) => (
                <option key={index} value={specialite}>{specialite}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Créer le compte Médecin
          </Button>
        </Form>
      )}
      {isCreateFormVisible && userType === 'patient' && (
        <Form onSubmit={handleCreate} className="mt-4">
          <Form.Group controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="prénom">
            <Form.Label>prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre prénom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dateNaissance">
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control
              type="date"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="numPortable">
            <Form.Label>Numéro de portable</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre numéro de portable"
              value={numPortable}
              onChange={(e) => setNumPortable(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="sexe">
            <Form.Label>Sexe</Form.Label>
            <Form.Control
              as="select"
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
            >
              <option value="">Sélectionnez le sexe</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="ville">
            <Form.Label>ville  </Form.Label>
              <Form.Control 
              type="text"
              placeholder="Entrez votre ville"
              value={ville}
              onChange={(e) => setville(e.target.value)}
            />
            </Form.Group>
            <Form>
        <Form.Group controlId="gouvernorat">
          <Form.Label>Sélectionnez un gouvernorat :</Form.Label>
          <Form.Select onChange={handleGouvernoratChange} value={selectedGouvernorat}>
            <option value="">Choisissez un gouvernorat</option>
            {gouvernorats.map((gouvernorat, index) => (
              <option key={index} value={gouvernorat}>{gouvernorat}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
         
          <Button variant="primary" type="submit">
            Créer le compte patient
          </Button>
        </Form>
      )}

      {/* Affichage du formulaire de connexion */}
      {isLoginFormVisible && (
        <Form onSubmit={handleLogin} className="mt-4">
          <Form.Group controlId="email">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Connexion {userType === 'medecin' ? 'Médecin' : 'Patient'}
          </Button>
        </Form>
      )}

      {/* Autre contenu de la page ici */}
    </Container>
  );
}

export default ColorSchemesExample;
