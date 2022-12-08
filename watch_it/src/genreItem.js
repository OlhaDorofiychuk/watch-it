import { useState } from "react";
export const GenreItem = ({
  index,
  genre,
  selectedGenre,
  setSelectedGenre,
}) => {
  let [hightLight, setHightLight] = useState(false);
  function toggle() {
    setHightLight(!hightLight);
  }
  function handleClick(e) {
    toggle();
    console.log(hightLight);
    const selected = e.target.innerText;
    if (selectedGenre.includes(selected)) return;
    //Need to remove from the list on second click
    setSelectedGenre([...selectedGenre, selected]);
  }
  return (
    <li
      className={hightLight === true ? "hightLight" : ""}
      onClick={(e) => handleClick(e)}
      key={index}
    >
      {genre}
    </li>
  );
};
