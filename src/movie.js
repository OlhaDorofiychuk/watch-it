import { useEffect,useState } from "react";
export const Movie = ({ selectedMovie, favoriteClicked, handleClick }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${selectedMovie.movie_id}?api_key=6b2aabd11953836de38f90530f997962`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data.results);
      });
  }, [selectedMovie]);
  return (
      <div className="movie">
        <><h2> {movie.title}</h2><span className="age">
          Age Restrigtion:<b>{movie.adult === false ? "No" : "Yes"}</b>
        </span><img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title} /><span className="reactions">
            <span
              onClick={handleClick}
              className={favoriteClicked === true
                ? "material-symbols-outlined favorite"
                : "material-symbols-outlined"}
            >
              favorite
            </span>
            <span className="material-symbols-outlined check">check</span>
            <span className="material-symbols-outlined">close</span>
          </span><span className="info">Overview: {movie.overview} </span><span className="genreId">Genre ID: {movie.genre_ids}</span><span className="score">
            Popularity Score:
            {movie.popularity}
          </span><span className="date">Release Date:{movie.release_date}</span></>
      </div>
  )
  };

