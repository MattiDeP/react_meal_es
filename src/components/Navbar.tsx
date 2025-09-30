import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>React Meal</h1>
        </div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/merch')}>Merchandising</button>       
        <button onClick={() => navigate('/login')}>Login</button>
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

