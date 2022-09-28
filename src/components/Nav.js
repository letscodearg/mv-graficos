import {Link} from 'react-router-dom'
import '../styles/Nav.css';

function Nav({links}) {
  return (
    <nav className="menu df rw wp jcc aic">
        {links.map( link => 
        <Link to={link.url} className="menuItem">
        {link.title}
        </Link>)}
    </nav>
  );
}

export default Nav;