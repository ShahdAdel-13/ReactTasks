import React, { useState, useEffect } from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const items = [
      "iphone",
      "Apple",
     "xaomi",
    "oppo",
    "samsung",
    "hawawi",
 
  ];

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      console.log("Filtering now"); 
      const results = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredList(results);
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [searchTerm]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search on your mobile brand"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="results-list">
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBox;
