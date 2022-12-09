import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./search";
import { LeftBar } from "./leftBar";
import "./content.css";

export const Content = ({ trendingMovies, setSelectedMovie }) => {
  //   const [checkClicked, setCheckClicked] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [searchResult, setSerchResult] = useState([]);

  // Togglefavorite click
  function toggleFavorite() {
    setFavoriteClicked(!favoriteClicked);
  }
  const favorite = [];
  function handleClick(e) {
    const li = document.getElementById(e.target.index);
    if (favoriteClicked && !favorite.includes(li.innerHTML)) {
      favorite.push(li.innerHTML);
      console.log("reaction li.innerHTML", li.innerHTML);
      toggleFavorite();
    } else toggleFavorite();
  }
  console.log("search Result", searchResult);

  //   function handleMovieClick() {}
  //Trending return
  const trending = (
    <ul className="trending-movies">
      {trendingMovies.map((movie, index) => {
        return (
          <li
            onClick={setSelectedMovie(movie)}
            className="film-card"
            key={index}
          >
            <h2 className="title">{movie.title}</h2>
            <Link to={`/movie/${movie.id}}`}>
              {
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              }
            </Link>
            <span className="movie-info">{movie.overview}</span>
            <span className="reactions">
              <span
                onClick={handleClick}
                className={
                  favoriteClicked === true
                    ? "material-symbols-outlined favorite"
                    : "material-symbols-outlined"
                }
              >
                favorite
              </span>
              <span className="material-symbols-outlined check">check</span>
              <span className="material-symbols-outlined">close</span>
            </span>
          </li>
        );
      })}
    </ul>
  );

  // Search return
  const searchMovies = (
    <ul className="search-movies">
      {searchResult.map((movie, index) => {
        return (
          <li className="film-card-search" key={index}>
            <h2 className="title">{movie.title}</h2>
            {
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.img}`}
                alt={movie.title}
              />
            }
            <span className="movie-info">{movie.overview}</span>

            <span className="reactions">
              <span
                onClick={handleClick}
                className={
                  favoriteClicked === true
                    ? "material-symbols-outlined favorite"
                    : "material-symbols-outlined"
                }
              >
                favorite
              </span>
              <span className="material-symbols-outlined check">check</span>
              <span className="material-symbols-outlined">close</span>
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <LeftBar />
      <section className="content">
        <Search setSerchResult={setSerchResult} searchResult={searchResult} />
        {searchResult.length > 0 ? searchMovies : trending}
      </section>
    </>
  );
};
