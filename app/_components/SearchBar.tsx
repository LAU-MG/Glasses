import React from 'react';
import './scss/SearchBar.scss';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher..." />
    </div>
  );
}

export default SearchBar;
