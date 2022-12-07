import { useState, useEffect } from "react";
import { GenreItem } from "./genreItem";
import "./leftBar.css";

export const LeftBar = () => {
  const [listOfGenres, setListOfGenres] = useState([]);
  const [shortList, SetShortList] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState([]);
  let [hightLight, setHightLight] = useState(false);
  let genreNamesOnly = [];
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=6b2aabd11953836de38f90530f997962&language=en-US"
    )
      .then((res) => {
        return res.json();
      })
      .then((genresData) => {
        genresData.genres.forEach((singleGenre) => {
          genreNamesOnly.push(singleGenre.name);
        });

        // console.log("list g", listOfGenres);
        // console.log("g data", genresData.genres);
        setListOfGenres(genreNamesOnly);
        // console.log("list state", listOfGenres);
      });
  }, []);
  console.log(selectedGenre);
  function toggle() {
    if (hightLight === false) return (hightLight = true);
    else {
      hightLight = false;
    }
  }
  console.log(hightLight);
  return (
    <div className="leftBar">
      <h3> Film Genres</h3>
      <ul className="list-of-genres">
        {listOfGenres.map((genre, index) => {
          return (
            <GenreItem
              key={index}
              genre={genre}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
              toggle={toggle}
            />
          );
        })}
      </ul>
    </div>
  );
};
