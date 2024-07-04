import { NavLink } from "react-router-dom";

function Header() {
    
    // const location = useLocation();

    return (
<<<<<<< HEAD
        <header>
            <p>logo</p>
=======

        <header className={`header ${location.pathname === "/" ? "header-home" : "header-global"}`}>
>>>>>>> main
            <p>header</p>
            <nav className="nav-header" >
            <NavLink className="navlink-header" to="/immersion">
                Immersion
            </NavLink>
            <NavLink className="navlink-header" to="/quiz">
                Quiz
            </NavLink>
<<<<<<< HEAD
=======
            <p>FAQ</p>
            </nav>
>>>>>>> main
        </header>
    )
}

export default Header;