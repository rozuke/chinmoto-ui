"use client";

import { SearchType } from "./";

import { useState } from "react";

const SearchBar = () => {
  const [type, setType] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchType />
      </div>
    </form>
  );
};

export default SearchBar;
