import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./search";
import { LeftBar } from "./leftBar";
import "./content.css";

export const Content = ({ trendingMovies, setSelectedMovie }) => {
  //   const [checkClicked, setCheckClicked] = useState(false);

  const [searchResult, setSerchResult] = useState([]);

  console.log("search Result", searchResult);

  //Trending return
  const trending = (
    <ul className="trending-movies">
      {trendingMovies.map((movie, index) => {
        return (
          <li
            // onClick={setSelectedMovie({...movie, movie.id = movie.id.trim()})}
            className="film-card"
            key={index}
          >
            <h2 className="title">{movie.title}</h2>
            <Link to={`/movie/${movie.id}`} onClick={setSelectedMovie(movie)}>
              {
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              }
            </Link>
            <span className="movie-info">{movie.overview}</span>
            <span className="reactions">
              <span className="material-symbols-outlined">favorite</span>
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
            <Link to={`/movie/${movie.id}`} onClick={setSelectedMovie(movie)}>
            {
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.img}`}
                alt={movie.title}
              />
            }
</Link>
            <span className="movie-info">{movie.overview}</span>

            <span className="reactions">
              <span className="material-symbols-outlined">favorite</span>
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
