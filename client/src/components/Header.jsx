import { NavLink, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    return (

        <header className={`header ${location.pathname === "/" ? "header-home" : "header-global"}`}>
            <NavLink className="logo-header" to="/" >
                <img src="../src/assets/icons/logo-equity-web.svg" alt="logo" />
                <span className="baseline">Equity<span>Web</span>
                </span>
            </NavLink>
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