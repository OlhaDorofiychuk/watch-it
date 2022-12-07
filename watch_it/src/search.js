import { useState } from "react";
import "./search.css";
export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      >
        {/* <span class="material-symbols-outlined">search</span> */}
      </input>
    </>
  );
};
