import { useState, useEffect } from "react";
import { GenreItem } from "./genreItem";
import "./leftBar.css";

export const LeftBar = () => {
  const [listOfGenres, setListOfGenres] = useState([]);
  const [shortList, SetShortList] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  function getMoviesByGenre() {
    fetch(
      `https://api.themoviedb.org/3discover/movie?api_key=6b2aabd11953836de38f90530f997962&with_genres=${selectedGenre}`
    )
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((genreFilmsData) => {
        const genreArray = [];
        genreFilmsData.results.forEach((single) => {
          const movieByGenre = {};
          movieByGenre.title = single.title;
          movieByGenre.img = single.poster_path;
          movieByGenre.overview = single.overview;
          console.log("movie", movieByGenre);
          genreArray.push(movieByGenre);
          console.log("array", genreArray);
        });

        setFilteredMovies(genreArray);
      });
  }

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
  console.log("filteredMovies", filteredMovies);
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
              getMoviesByGenre={getMoviesByGenre}
            />
          );
        })}
      </ul>
      <button className="show-more" onClick={handleClick}>
        <span className="button"> Show More</span>
      </button>
    </div>
  );
};
