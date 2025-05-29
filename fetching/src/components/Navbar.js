function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <button className="nav-btn selected">Shopping Dukan</button>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#wallet" className="nav-link">Wallet</a>
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
  