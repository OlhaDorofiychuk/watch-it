import "./favorite.css";
// import "./content.css";
function clear() {
  const page = document.getElementsByClassName("container");
  page.innerHTML = "";
}
clear();
const resultArray = [];
export const Favorite = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/trending/all/day?api_key=6b2aabd11953836de38f90530f997962"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resultData) => {
  //       resultData.results.forEach((single) => {
  //         const movie = {};
  //         movie.title = single.title;
  //         movie.img = single.poster_path;
  //         movie.overview = single.overview;

  //         resultArray.push(movie);
  //       });
  //     });

  return (
    <div className="container-favorite">
      <h1>Favorite List Here</h1>
      <ul className="trending-movies">
        {resultArray.map((movie, index) => {
          return (
            <li className="film-card" key={index}>
              <h2 className="title">{movie.title}</h2>
              {
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              }
              <span className="movie-info">{movie.overview}</span>
              <span className="reactions">
                <span
                //   onClick={handleClick}
                //   className={
                // favoriteClicked === true
                //   ? "material-symbols-outlined favorite"
                //   :
                // "material-symbols-outlined"
                //   }
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
    </div>
  );
};
