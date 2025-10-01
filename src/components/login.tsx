import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username.trim().length > 0) {
      login(username.trim());
      navigate('/profile');
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Accedi</h1>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button className="login-button" type="submit">Accedi</button>
      </form>
    </div>
  );
}

export default Login;


