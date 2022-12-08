import { useState, useEffect } from "react";
import { GenreItem } from "./genreItem";
import "./leftBar.css";

export const LeftBar = () => {
  const [listOfGenres, setListOfGenres] = useState([]);
  const [shortList, SetShortList] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState([]);

  function getGenreList() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=6b2aabd11953836de38f90530f997962&language=en-US"
    )
      .then((res) => {
        return res.json();
      })
      .then((genresData) => {
        setListOfGenres(genresData);
        console.log("list of genres obj", listOfGenres);
      });
  }

  let list = [];
  let popular = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },

    { id: 14, name: "Fantasy" },
    { id: 10749, name: "Romance" },
  ];

  if (shortList === true) {
    list = popular;
  } else list = listOfGenres.genres;
  console.log("list of genres before map", listOfGenres);

  function handleClick() {
    SetShortList(!shortList);
    getGenreList();
  }
  console.log("selected genre", selectedGenre);
  console.log("list", list);
  return (
    <div className="leftBar">
      <h3> Film Genres</h3>
      <ul className="list-of-genres">
        {list.map((genre, index) => {
          return (
            <GenreItem
              key={index}
              genre={genre}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />
          );
        })}
      </ul>
      <button className="show-more" onClick={handleClick}>
        Show More
      </button>
    </div>
  );
};
