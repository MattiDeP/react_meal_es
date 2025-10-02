import React, { useState } from "react";
import './signup.css';

// Definizione del componente Signup
const Signup: React.FC = () => {
  // Stato per username, email, accettazione termini 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  // Funzione chiamata al submit del form
  const handleSubmit = () => {
    if (!accepted) {
      alert("Devi accettare i termini e condizioni."); // Mostra errore se la checkbox non è spuntata
      return;
    }
    alert(`Registrazione effettuata!\nUsername: ${username}\nEmail: ${email}`);
  };

  return (
    <div className="signup-container">
    <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-title">Registrati</h1>
      <div>
        <label>
          <input
            placeholder="Username"
            className="signup-input"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)} // Aggiorna lo stato username
            required
          />
        </label>
      </div>
      <div>
        <label>
          <input
            className="signup-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)} // Aggiorna lo stato email
            required
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)} // Aggiorna lo stato accepted
          />
          Accetto i termini e condizioni
        </label>
      </div>
      <button type="submit" className="signup-button">Registrati</button>
    </form>
    </div>
  );
};

export default Signup;