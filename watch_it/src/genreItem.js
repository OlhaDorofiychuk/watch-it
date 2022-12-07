export const GenreItem = ({
  index,
  genre,
  selectedGenre,
  setSelectedGenre,
  toggle,
}) => {
  function handleClick(e) {
    const selected = e.target.innerText;
    if (selectedGenre.includes(selected)) return;
    setSelectedGenre([...selectedGenre, selected]);
  }
  return (
    <li onClick={(e) => handleClick(e)} key={index}>
      {genre}
    </li>
  );
};
