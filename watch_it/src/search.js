import { useState, useEffect } from "react";
import "./search.css";
export const Search = ({ setSerchResult }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=6b2aabd11953836de38f90530f997962&language=en-US&query=${searchInput}&page=1&include_adult=false`
    )
      .then((res) => {
        return res.json();
      })
      .then((resultData) => {
        console.log("resultData.results", resultData.results);
        const resultArray = [];
        resultData.results.forEach((single) => {
          const movie = {};
          movie.title = single.title;
          movie.img = single.poster_path;
          movie.overview = single.overview;
          console.log("movie", movie);
          resultArray.push(movie);
          console.log("array", resultArray);
        });

        setSerchResult(resultArray);
      });
  }, [searchInput]);

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
