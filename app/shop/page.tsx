'use client'

import React from 'react';
import '../(home)/styles.scss';
import Header from '../_components/Header';
import ProductCard from '../_components/ProductCard';
import 'bootstrap/scss/bootstrap.scss';

function Featured() {
  const [showMore, setShowMore] = React.useState(false);
  const maxItems = 6;

  // Function definition for handleShowMore
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const products = [
    { title: "Product 1", description: "Description", image: "/images/Kulangot.png" },
    { title: "Product 2", description: "Description", image: "/images/Tiktilaok_Manok.png" },
    { title: "Product 3", description: "Description", image: "/images/Very_Nice.png" },
    { title: "Product 4", description: "Description", image: "/images/Quake_Overload.png" },
    { title: "Product 5", description: "Description", image: "/images/Kutu.png" },
    { title: "Product 6", description: "Description", image: "/images/Tuluk.png" },
    { title: "Product 1", description: "Description", image: "/images/Balakubak.png" },
    { title: "Product 2", description: "Description", image: "/images/Pitaklan.png" },
    { title: "Product 3", description: "Description", image: "/images/Burnikk.png" },
    { title: "Product 4", description: "Description", image: "/images/Buldit.png" },
    { title: "Product 5", description: "Description", image: "/images/Sipon_Malapot.png" },
  ];

  const slicedProducts = products.slice(0, showMore ? products.length : maxItems);

  return (
    <div className="App">
      <Header />
      <div className="features-container">
        <div className="features">
          <div className="shop-products">
            <div className="product-grid">
              {slicedProducts.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  className="product-card small-card"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {products.length > maxItems && (
        <div className="show-more-container">
          <button className="show-more" onClick={handleShowMore}>
            {showMore ? 'Show Less' : 'Show More Items'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Featured;
