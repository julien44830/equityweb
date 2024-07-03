import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <p>logo</p>
            <p>header</p>
            <NavLink className="button" to="/immersion">
                Immersion
            </NavLink>
            <NavLink className="button" to="/quiz">
                Quiz
            </NavLink>
        </div>
    )
}

export default Header;