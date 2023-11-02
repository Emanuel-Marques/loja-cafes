import { NavLink } from 'react-router-dom';
import './nav-bar.css';
function NavBar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coffeeList"> Cafés</NavLink>
    </nav>
  );
}

export default NavBar;