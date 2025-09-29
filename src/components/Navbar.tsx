import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>React Meal</h1>
        </div>
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

