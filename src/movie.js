export const Movie = ({ selectedMovie, favoriteClicked, handleClick }) => {
  return {
    if(selectedMovie) {
      <div className="movie">
        <h2> {selectedMovie.title}</h2>
        <span className="age">
          Age Restrigtion:<b>{selectedMovie.adult === false ? "No" : "Yes"}</b>
        </span>
        <img
          src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />
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
        <span className="info">Overview: {selectedMovie.overview} </span>
        <span className="genreId">Genre ID: {selectedMovie.genre_ids}</span>
        <span className="score">
          Popularity Score:
          {selectedMovie.popularity}
        </span>
        <span className="date">Release Date:{selectedMovie.release_date}</span>
      </div>;
    },
  };
};
