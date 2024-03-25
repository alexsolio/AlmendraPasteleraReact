import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="Header">
                <Link to='/'>
                    <h3 className="Title">Almendra Pastelera</h3>
                </Link>
                <CartWidget className="CartWidget" />
            </div>
            <div className='ButtonsContainer'>
                <NavLink to={`/category/tortasclasicas`} className='Option'>Tortas Clásicas</NavLink>
                <NavLink to={`/category/cheesecakes`} className='Option'>Cheesecakes</NavLink>
                <NavLink to={`/category/panaderia`} className='Option'>Panadería</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
