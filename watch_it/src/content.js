import { useState } from "react";
import "./content.css";
import { Search } from "./search";
export const Content = ({ trendingMovies }) => {
  const [checkClicked, setCheckClicked] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  function toggle() {
    setFavoriteClicked(!favoriteClicked);
  }
  function handleClick(e) {
    toggle();
  }
  return (
    <section className="content">
      <Search />
      <ul className="trending-movies">
        {trendingMovies.map((movie, index) => {
          return (
            <li className="film-card" key={index}>
              <h2 className="title">{movie.title}</h2>
              {
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              }
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
    </section>
  );
};
