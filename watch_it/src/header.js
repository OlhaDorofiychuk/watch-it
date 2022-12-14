import "./header.css";
import { Link } from "react-router-dom";
export const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header>
        <h1 className="logo">WATCH it</h1>
        <>
          <nav className="navigation">
            <ul>
              <button onClick={toggleTheme}>
                {theme === "grey" ? (
                  <span>change to blue</span>
                ) : (
                  <span>change to grey</span>
                )}
              </button>
              <li>
                <Link to="/">
                  🏡<span className="link-text">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/favorite">
                  <span className="link-text">List Of Favorite Movies</span>
                </Link>
              </li>
              <li>
                <Link to="/watched">
                  <span className="link-text">List Of Watched Already</span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      </header>
    </>
  );
};
