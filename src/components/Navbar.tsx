import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>React Meal</h1>
        </div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/merch')}>Merchandising</button>   
        <button onClick={() => navigate('/ins_merch')}>Nuovo merch</button>   
        <button onClick={toggleTheme}>{theme === 'light' ? 'Tema scuro' : 'Tema chiaro'}</button>   
        {user ? (
          <span>{`Ciao, ${user.name}`}</span>
        ) : (
          <button onClick={() => navigate('/login')}>Accedi</button>
        )}
        <button onClick={() => navigate('/signup')}>Registrati</button>
        <div className="navbar-cart">
          <button className="cart-button">
            <span>Your Cart</span>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

