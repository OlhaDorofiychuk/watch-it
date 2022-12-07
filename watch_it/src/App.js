import { LeftBar } from "./leftBar";
import "./App.css";
import { Header } from "./header";
import { Content } from "./content";
import useState from "react";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=6b2aabd11953836de38f90530f997962"
  )
    .then((res) => {
      return res.json();
    })
    .then((trendingMoviesData) => {
      setTrendingMovies(trendingMoviesData);
      console.log(trendingMovies);
    });
  return (
    <>
      <Header />
      <Content />
      <LeftBar />
    </>
  );
}

export default App;
