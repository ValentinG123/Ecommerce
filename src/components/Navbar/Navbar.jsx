/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    return false;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
      <div className="container-fluid ">
        <a className="navbar-brand text-uppercase logo h1" href="#">
          Rolex
        </a>
        <button
          onClick={handleClick}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <ul className="navbar-nav justify-self-start">
            <li className="nav-item mx-4">
              <a className="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Relojes
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Gafas
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Accesorios
              </a>
            </li>
          </ul>
        </div>
        <button className="cart-button rounded-circle border-0">
          {' '}
          <i className="fas fa-shopping-cart cart"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
