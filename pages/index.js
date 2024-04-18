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
                    <button className="shop-now-btn">Shop Now <i className="ri-arrow-right-s-line"><span role="img" aria-label="arrow-right" class="anticon anticon-arrow-right"><svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path></svg></span></i></button>
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
    <div className="col-md-8 d-flex justify-content-end">
      <h3>Featured Products</h3>
    </div>
 
  </div>
     <div className="col-md-6 d-flex justify-content-end">
      <a href="#">See All</a>
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
    <div className="col-md-8 d-flex justify-content-end">
      <h3>Recommended Products</h3>
    </div>
 
  </div>
     <div className="col-md-6 d-flex justify-content-end">
      <a href="#">See All</a>
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