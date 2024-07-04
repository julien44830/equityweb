import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <p>logo</p>
            <p>header</p>
            <NavLink className="button" to="/immersion">
                Immersion
            </NavLink>
            <NavLink className="button" to="/quiz">
                Quiz
            </NavLink>
        </header>
    )
}

export default Header;