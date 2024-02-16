import { Link } from "react-router-dom";
import Logo from "./images/logo.jpg";
import "./components css/NavBar.css";

export default function NavBar() {
  return (
    <>
      <header className="header-container">
        <img className="header-logo" src={Logo} alt="logo" />
        <nav>
          <ul className="nav-container">
            <li>
              <Link className="nav-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                Menu
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                Reservations
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                Order Online
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
