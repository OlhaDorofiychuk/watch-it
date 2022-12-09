import { LeftBar } from "./leftBar";
import "./App.css";
import { Header } from "./header";
import { Content } from "./content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Routes } from "react-router-dom";
import { Favorite } from "./favorite";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b2aabd11953836de38f90530f997962"
    )
      .then((res) => {
        return res.json();
      })
      .then((trendingMoviesData) => {
        setTrendingMovies(trendingMoviesData.results);
        // console.log("trending", trendingMovies);
      });
  }, []);
  return (
    <div className="container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      <Header />
      <>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">🏡Home</Link>
            </li>
            <li>
              <Link to="/favorite">List Of Favorite Movies</Link>
            </li>
            <li>
              <Link to="/watched">List Of Watched Already</Link>
            </li>
          </ul>
        </nav>
      </>
      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/watched" element={<Favorite />} />
      </Routes>

      <Content trendingMovies={trendingMovies} />
      <LeftBar />
    </div>
  );
}

export default App;
