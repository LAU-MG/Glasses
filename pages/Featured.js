import React from 'react';
import '../public/styles.css';
import SearchBar from './SearchBar';
import ShoppingBasket from './ShoppingBasket';
import ProductCard from './ProductCard';
import Footer from "./Footer";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Featured() {
  return (
    <div className="App">
      <header>
        <div className="row">
          <img className="logo" src="/images/salinkaLogo.png" alt="logo"/>
          <Navigation/>
          <div className="right-items">
            <SearchBar />
            <ShoppingBasket />
            <button className="sign-up">Sign Up</button>
            <button className="sign-in">Sign In</button>
          </div>
        </div>
      </header>
      <div className="hero-section">
        <div className="rectangle-hero-section">
          <div className="column-container">
            <div className="column-left">
              <h1>See everything with Clarity</h1>
              <p>Buying eyewear should leave you happy and good-looking, with money in your pocket.
                Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
              <button className="">Shop</button>
            </div>
            <div className="column-right">
              <img className="man-glasses" src="/images/Featured.png" alt="man wearing red glasses"/>
            </div>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <div className="feature-left">
            <h3>Featured Products</h3>
          </div>
          <div className="feature-right">
            <a href="#">See All</a>
          </div>
        </div>
        <div className="features-products">
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
            image="/images/Buldit.png"
          />
          <ProductCard
            title="Product 5"
            description="Description"
            image="/images/Balakubak.png"
          />
          <ProductCard
            title="Product 6"
            description="Description"
            image="/images/Tiktilaok_Manok.png"
          />
          <ProductCard
            title="Product 6"
            description="Description"
            image="/images/Tiktilaok_Manok.png"
          />
          <ProductCard
            title="Product 6"
            description="Description"
            image="/images/Kutu.png"
          />
          <ProductCard
            title="Product 6"
            description="Description"
            image="/images/Quake_Overload.png"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Featured;

