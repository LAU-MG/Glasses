import React from 'react';
import '../public/styles.css';
import SearchBar from './SearchBar';
import ShoppingBasket from './ShoppingBasket';
import ProductCard from './ProductCard';
import Footer from "./Footer";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Recommended() {
  return (
    <div className="App">
      <header>
        <div className="row">
          <img className="logo" src="/" alt="logo"/>
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
              <button className="">Shop now</button>
            </div>
            <div className="column-right">
              <img className="women-happy-glasses" src="/images/Recommended.png" alt="man wearing red glasses"/>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended-container">
        <div className="recommended">
          <div className="recommended-left">
            <h3>Recommended Products</h3>
          </div>
          <div className="recommended-right">
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
