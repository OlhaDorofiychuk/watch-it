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
              <button className="color-button" onClick={toggleTheme}>
                {theme === "grey" ? (
                  <span>Change theme to blue</span>
                ) : (
                  <span>Change theme to grey</span>
                )}
              </button>
            </ul>
          </nav>
        </>
      </header>
    </>
  );
};
