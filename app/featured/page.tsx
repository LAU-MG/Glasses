import React from 'react';
import '../(home)/styles.scss';
import Header from '../_components/Header';
import ProductCard from '../_components/ProductCard';
import Footer from "../_components/Footer";
import 'bootstrap/scss/bootstrap.scss';
import Image from 'next/image';

function Featured() {
  return (
    <div className="App">
      <Header />
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
              <div className="column-container">
                <Image className="man-glasses float-md-end" src="/images/Featured.png" alt="woman wearing red glasses"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <div className="title-products feature-left">
            <h1>Featured Products</h1>
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

