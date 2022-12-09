import { useState } from "react";
export const GenreItem = ({
  index,
  genre,
  selectedGenre,
  setSelectedGenre,
  getMoviesByGenre,
}) => {
  let [hightLight, setHightLight] = useState(false);

  //Chage class for the hightlight of the selection
  function toggle() {
    setHightLight(!hightLight);
  }

  //Handle click to capture selectedGenre state
  function handleClick(e) {
    getMoviesByGenre();
    toggle();
    const selected = e.target.getAttribute("id");
    // NUMBER

    console.log("selected", typeof selected);
    if (selectedGenre.includes(selected)) {
      const indexToRemove = selectedGenre.indexOf(selected);
      if (indexToRemove > -1) {
        selectedGenre.splice(indexToRemove, 1);
      }
      setSelectedGenre(selectedGenre);
    } else {
      setSelectedGenre([...selectedGenre, selected]);
      // NUMBER
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
