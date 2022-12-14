import "./App.css";
import { Header } from "./header";
import { Content } from "./content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./favorite";
import { Movie } from "./movie";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [theme, setTheme] = useState("grey");
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  //  Loading trending movies for this week
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b2aabd11953836de38f90530f997962"
    )
      .then((res) => {
        return res.json();
      })
      .then((trendingMoviesData) => {
        setTrendingMovies(trendingMoviesData.results);
      });
  }, []);

  // Toggle color theme state
  const toggleTheme = () => {
    if (theme === "grey") {
      setTheme("blue");
    } else {
      setTheme("grey");
    }
  };
  console.log("selectedMovie", selectedMovie);

  // Togglefavorite click
  function toggleFavorite() {
    setFavoriteClicked(!favoriteClicked);
  }
  const favorite = [];
  function handleClick(e) {
    const li = document.getElementById(e.target.index);
    if (favoriteClicked && !favorite.includes(li.innerHTML)) {
      favorite.push(li.innerHTML);
      console.log("reaction li.innerHTML", li.innerHTML);
      toggleFavorite();
    } else toggleFavorite();
  }
  return (
    <div className={`container ${theme}`}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/watched" element={<Favorite />} />
        <Route
          path="/"
          element={
            <Content
              trendingMovies={trendingMovies}
              setTrendingMovies={setTrendingMovies}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Movie
              favoriteClicked={favoriteClicked}
              handleClick={handleClick}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
