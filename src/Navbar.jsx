import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // For cart and heart icons
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({cartCount , favouriteCount}) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => navigate("/")}>
        <img
          src="https://thumbs.dreamstime.com/b/glowing-neon-movie-clapper-icon-isolated-brick-wall-background-film-board-clapperboard-sign-cinema-production-media-industry-218465569.jpg" // Replace with your actual logo URL
          alt="Logo"
          className="navbar__logo-img"
        />
        <h1 className="navbar__title">Housefull</h1>
      </div>

      <div className="navbar__icons">
        <div className="navbar__cart" onClick={() => navigate("/cart")}>
          <FaShoppingCart className="navbar__icon" />
          {cartCount > 0 && <span className="xyz">{cartCount}</span>}
        </div>
        <div className="navbar__favorites" onClick={() => navigate("/favourites")}>
          <FaHeart className="navbar__icon" />
          {favouriteCount > 0 && <span className="xyz">{favouriteCount}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
