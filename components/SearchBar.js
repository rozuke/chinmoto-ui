"use client";

import { SearchType } from "./";

const SearchBar = () => {
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
