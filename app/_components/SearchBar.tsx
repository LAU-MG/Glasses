import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  const data = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Watermelon"
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              {result}
            </div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
