import React from 'react';
import '../public/styles.css';
import ProductCard from './ProductCard';
import Footer from "./Footer";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Recommended() {
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
