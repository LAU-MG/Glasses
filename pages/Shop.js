import React from 'react';
import '../public/styles.css';
import SearchBar from './SearchBar';
import ShoppingBasket from './ShoppingBasket';
import ProductCard from './ProductCard';
import Footer from "./Footer";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Featured() {
  const [showMore, setShowMore] = React.useState(false);
  const maxItems = 6; // Number of items to display initially

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
      <div className="features-container">
        <div className="features">
          <div className="shop-products">
          </div>
          {slicedProducts.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
          {products.length > maxItems && (
            <button className="show-more" onClick={handleShowMore}>
              {showMore ? 'Show Less' : 'Show More Items'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Featured;
