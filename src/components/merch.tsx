import './merch.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Merch() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!id.trim()) return;
    navigate(`/product/${id.trim()}`);
  }

  return (
    <div className="merch-container">
      <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
        <input
          type="text"
          placeholder="Inserisci ID prodotto"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '0.5rem' }}>Vai</button>
      </form>
    </div>
  );
}

export default Merch;