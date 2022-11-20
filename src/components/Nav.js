import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ links, show, call }) {
  return (
    <nav
      className={show ? "notShowMenu" : "menu showMenu df cl wp aic jcc d-rw"}
    >
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.url}
          className={!show ? "menuItem" : ""}
          onClick={() => call()}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
