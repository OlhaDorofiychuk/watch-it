import { LeftBar } from "./leftBar";
import "./App.css";
import { Header } from "./header";
import { Content } from "./content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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
      <Content trendingMovies={trendingMovies} />
      <LeftBar />
    </div>
  );
}

export default App;
