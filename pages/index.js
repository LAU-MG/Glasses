import React from 'react';
import '../public/styles.css';
import SearchBar from './SearchBar';
import ShoppingBasket from './ShoppingBasket';
import ProductCard from './ProductCard';
import Footer from "./Footer";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

function App() {
  return (
    <div className="App">
      <header>
      <div className="container-fluid bg-light">
      <div className="row align-items-center py-3">
        <div className="col-md-3 text-center">
          <img className="logo img-fluid" src="/images/salinkaLogo.png" alt="logo" />
        </div>
        <div className="col-md-9">
          <Navigation />
        </div>
      </div>
    </div>
      </header>
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="column-container">
                <div className="column-left">
                  <h1>See everything with Clarity</h1>
                  <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
                  <Link href="/Shop">
                    <button className="shop-now-btn">Shop Now <i className="ri-arrow-right-s-line"></i></button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="women-glasses" src="/images/hero-section.png" alt="woman wearing red glasses"/>
            </div>
          </div>
        </div>
      </div>
      <div className="features-container container">
        <div className="features">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Featured Products</h3>
            </div>
            <div className="col-md-6 text-right">
              <a href="#">See All</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ProductCard
              title="Product 1"
              description="Description"
              image="/images/Burnikk.png"
            />
          </div>
          {/* Répétez les ProductCard pour les autres produits */}
        </div>
      </div>
      <div className="features-container container">
        <div className="features">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Recommended Products</h3>
            </div>
            <div className="col-md-6 text-right">
              <a href="#">See All</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ProductCard
              title="Product 1"
              description="Description"
              image="/images/Burnikk.png"
            />
          </div>
          {/* Répétez les ProductCard pour les autres produits */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
