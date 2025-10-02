import React, { useState } from "react";
import './ins_merch.css';

// Definizione del componente merchandising
const ins_merch: React.FC = () => {
  // Stato per titolo, porezzo, categoria
  const [titolo, setTitolo] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [categoria, setCategoria] = useState<string[]>([]);

  // Funzione chiamata al submit del form
  const handleSubmit = () => {
    alert(`Prodotto inserito!\n Nome: ${titolo}\n Prezzo: ${prezzo}\n Categoria: ${categoria}`);
  };

  return (
    <div className="signup-container">
    <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-title">Inserisci nuovo prodotto</h1>
      <div>
        <label>
          <input
            placeholder="nome prodotto"
            className="signup-input"
            type="text"
            value={titolo}
            onChange={e => setTitolo(e.target.value)} // Aggiorna lo stato titolo
            required
          />
        </label>
      </div>
      <div>
        <select multiple value={categoria} onChange={e => setCategoria(Array.from(e.target.selectedOptions, option => option.value))}>
          <option value='t-shirt'>T-shirt</option>
          <option value='mug'>Tazze</option>
          <option value='poster'>Poster</option>
        </select>
      </div>
      <div>
        <label>
          <input
            className="signup-input"
            placeholder="prezzo"
            type="number"
            value={prezzo}
            onChange={e => setPrezzo(e.target.value)} // Aggiorna lo stato prezzo
            required
          />
        </label>
      </div>
      <div>
      </div>
      <button type="submit" className="signup-button">Salva</button>
    </form>
    </div>
  );
};

export default ins_merch;