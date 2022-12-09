import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
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
            </ul>
          </nav>
        </>
      </header>
    </>
  );
};
