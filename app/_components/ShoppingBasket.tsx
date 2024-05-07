import React, { useState } from 'react';
import './scss/ShoppingBasket.scss';

function SearchBar() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const closeBasket = () => {
    setIsBasketOpen(false);
  };

  return (
    <div className={`shopping-basket-wrapper ${isBasketOpen ? 'open' : ''}`}>
      <button className="shopping-basket-icon m-3" onClick={toggleBasket}>
        <svg viewBox="64 64 896 896" focusable="false" data-icon="shopping" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
        </svg>
      </button>
      <div className="shopping-basket">
        <button className="close-button btn btn-danger" onClick={closeBasket}>
          Close
        </button>
        <span className="clear-text">clearBasket</span>
        <h2 className="font-weight-bold">My Basket</h2>
      </div>
    </div>
  );
}

export default SearchBar;
