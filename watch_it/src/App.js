import { LeftBar } from "./leftBar";
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

  console.log("selectedMovie", selectedMovie);
  return (
    <div className="container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      <Header />

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
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
