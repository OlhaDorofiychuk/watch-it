import { useState, useEffect } from "react";
import "./search.css";
export const Search = ({ setSerchResult, searchResult }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie/?api_key=6b2aabd11953836de38f90530f997962&language=en-US&query=${searchInput}&page=1&include_adult=false`
      )
        .then((res) => {
          return res.json();
        })
        .then((resultData) => {
          const resultArray = [];
          resultData.results.map((single) => {
            const movie = {};
            movie.title = single.title;
            movie.img = single.poster_path;
            movie.overview = single.overview;

            return resultArray.push(movie);
          });

          setSerchResult(resultArray);
        });
    }
  }, [searchInput, setSerchResult]);

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      ></input>
    </>
  );
};
