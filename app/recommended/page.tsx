'use client'


import React from 'react';
import '../(home)/styles.scss';
import Header from '../_components/Header';
import ProductCard from '../_components/ProductCard';
import Footer from "../_components/Footer";
import 'bootstrap/scss/bootstrap.scss';

function Recommended() {
  return (
    <div className="App">
      <Header />
      <div className="hero-section">
        <div className="rectangle-hero-section">
          <div className="column-container">
            <div className="title-recommended column-left">
              <h1 className="m-lg-5">Recommended Products</h1>
            </div>
            <div className="column-right">
              <img className="women-happy-glasses" src="/images/Recommended.png" alt="man wearing red glasses"/>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended-container">
        <div className="recommended">
          <div className="title-products recommended-left">
            <h3>Recommended Products</h3>
          </div>
          <div className="see-all-link recommended-right">
            <a href="#">See All</a>
          </div>
        </div>
        <div className="recommended-products">
          <ProductCard
            title="Product 1"
            description="Description"
            image="/images/Burnikk.png"
          />
          <ProductCard
            title="Product 2"
            description="Description"
            image="/images/Kibal_Batal.png"
          />
          <ProductCard
            title="Product 3"
            description="Description"
            image="/images/Very_Nice.png"
          />
          <ProductCard
            title="Product 4"
            description="Description"
            image="/images/Kulangot.png"
          />
          <ProductCard
            title="Product 5"
            description="Description"
            image="/images/Sipon_Malapot.png"
          />
          <ProductCard
            title="Product 6"
            description="Description"
            image="/images/Pitaklan.png"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Recommended;
