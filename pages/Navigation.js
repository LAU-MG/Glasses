import React from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import '../public/Navigation.css';
import SearchBar from './SearchBar';
import ShoppingBasket from './ShoppingBasket';

function Navigation() {
  return (
    <div className="nav-container">
     <Nav className="menu flex-column flex-md-row justify-content-between align-items-center">
      <Nav.Item>
        <Link href="/index" legacyBehavior>
          <button className="nav-link">Accueil</button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/Shop" legacyBehavior>
          <button className="nav-link">Boutique</button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/Featured" legacyBehavior>
          <button className="nav-link">En Vedette</button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/Recommended" legacyBehavior>
          <button className="nav-link">Recommandé</button>
        </Link>
      </Nav.Item>
      <div className="d-flex justify-content-end">
        <Nav.Item>
          <div className="d-inline-flex align-items-center">
            <SearchBar />
            <ShoppingBasket />
            <button className="btn btn-up mx-2">Sign Up</button>
            <button className="btn btn-in">Sign In</button>
          </div>
        </Nav.Item>
      </div>
    </Nav>
    </div>
  );
}

export default Navigation;
