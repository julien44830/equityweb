import { NavLink, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    return (

        <header className={`header ${location.pathname === "/" ? "header-home" : "header-global"}`}>
            <p className="logo-header"> <NavLink className="navlink-header" to="/">header</NavLink></p>
            <nav className="nav-header" >
                <NavLink className="navlink-header" to="/quiz">
                    Quiz
                </NavLink>
                <NavLink className="navlink-header" to="/immersion">
                    Immersion
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;