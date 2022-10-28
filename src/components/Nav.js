import {Link} from 'react-router-dom'
import '../styles/Nav.css';

function Nav({links, className}) {
  return (
    <nav className={className === false ? "menu showMenu df cl wp aic jcc d-rw" : "notShowMenu"}>
        {links.map( link => 
        <Link to={link.url} className= {className === false ? "menuItem" : ""} >
        {link.title}
        </Link>)}
    </nav>
  );
}

export default Nav;