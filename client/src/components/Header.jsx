import { NavLink } from "react-router-dom";

function Header() {
    
    // const location = useLocation();

    return (

        <header className={`header ${location.pathname === "/" ? "header-home" : "header-global"}`}>
            <p>header</p>
            <nav className="nav-header" >
            <NavLink className="navlink-header" to="/immersion">
                Immersion
            </NavLink>
            <NavLink className="navlink-header" to="/quiz">
                Quiz
            </NavLink>
            <p>FAQ</p>
            </nav>
        </header>
    )
}

export default Header;