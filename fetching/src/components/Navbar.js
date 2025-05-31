import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-btn selected">Dukan</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/wallet" className="nav-link">Wallet</Link>
      </div>
      <div className="navbar-right">
        <button className="cart-btn">Cart (0)</button>
        <input className="search-input" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
    </nav>
  );
}
export default Navbar;
