import React from "react";
import "./Searchbar.css";
import Filter from "../Emojies/Filter";

function Searchbar({ setFilteredEmoji }) {
  const handleText = (event) => {
    setFilteredEmoji(Filter(event.target.value, 10));
  };
  return (
    <div className="search-input">
      <div>
        <input
          className="input-text"
          placeholder="Search Emoji"
          onChange={handleText}
        />
      </div>
    </div>
  );
}

export default Searchbar;
