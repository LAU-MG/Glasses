import React from 'react';
import '../public/styles.css';
import ProductCard from './ProductCard';
import Footer from "./Footer";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

function Featured() {
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
                  <h1>Featured Products</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="man-glasses float-md-end" src="/images/Featured.png" alt="woman wearing red glasses"/>
            </div>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <div className="title-products feature-left">
            <h1>Featured Products</h1>
          </div>
          <div className="see-all-link feature-right">
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

