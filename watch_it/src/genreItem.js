import { useState } from "react";
export const GenreItem = ({
  index,
  genre,
  selectedGenre,
  setSelectedGenre,
  getMoviesByGenre,
}) => {
  let [hightLight, setHightLight] = useState(false);
  function toggle() {
    setHightLight(!hightLight);
  }
  function handleClick(e) {
    getMoviesByGenre();
    toggle();
    const selected = Number(e.target.getAttribute("id"));

    console.log("selected", typeof selected);
    if (selectedGenre.includes(selected)) {
      const indexToRemove = selectedGenre.indexOf(selected);
      if (indexToRemove > -1) {
        selectedGenre.splice(indexToRemove, 1);
      }
      setSelectedGenre(selectedGenre);
    } else {
      setSelectedGenre([...selectedGenre, Number(selected)]);
    }
  }
  return (
    <li
      className={hightLight === true ? "hightLight" : ""}
      onClick={(e) => handleClick(e)}
      key={index}
      id={genre.id}
    >
      {genre.name}
    </li>
  );
};
