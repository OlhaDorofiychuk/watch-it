import { useEffect, useState } from "react";
import { GenreItem } from "./genreItem";
import "./leftBar.css";

export const LeftBar = () => {
  const [listOfGenres, setListOfGenres] = useState([]);
  const [shortList, SetShortList] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Get movies by genre
  useEffect(() => {
    const url = `https://api.themoviedb.org/3discover/movie?api_key=6b2aabd11953836de38f90530f997962&with_genres=${selectedGenre.join(
      "+"
    )}`;
    if (selectedGenre.length > 0) {
      console.log("url", url);
      fetch(url)
        .then((res) => {
          console.log("res", res);
          return res.json();
        })
        .then((genreFilmsData) => {
          const genreArray = [];
          genreFilmsData.results.map((single) => {
            const movieByGenre = {};
            movieByGenre.title = single.title;
            movieByGenre.img = single.poster_path;
            movieByGenre.overview = single.overview;
            console.log("movie", movieByGenre);
            return genreArray.push(movieByGenre);
          });

          setFilteredMovies(genreArray);
        });
    }
  }, [selectedGenre]);

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

  function handleClick() {
    SetShortList(!shortList);
    getGenreList();
  }
  console.log("selected genre", selectedGenre);
  console.log("list", list);
  console.log("filteredMovies", filteredMovies);
  const buttonText = document.getElementsByClassName(".button");

  return (
    <div className="leftBar">
      <h3> Film Genres</h3>
      <ul className="list-of-genres">
        {list &&
          list.map((genre, index) => {
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
        <span className="button">
          {shortList === true
            ? (buttonText.innerText = "Show More")
            : (buttonText.innerText = "Show Less")}
        </span>
      </button>
    </div>
  );
};
