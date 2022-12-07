import { GenreItem } from "./genreItem";
import "./leftBar.css";

export const LeftBar = () => {
  const listOfGenres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "horror",
    "Mystery",
    "romance",
    "Thriller",
  ];
  return (
    <>
      <h2> Film Genres</h2>
      <ul className="list-of-genres">
        {listOfGenres.map((genre, index) => {
          return <GenreItem key={index} genre={genre} />;
        })}
      </ul>
    </>
  );
};
