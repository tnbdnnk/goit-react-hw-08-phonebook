import { useAuth } from "hooks";
import { NavLink } from "react-router-dom";
import css from './Nav.module.css';

export const Nav = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink
                to="/"
                className={css.nav__link}
            >
                Home
            </NavLink>
            {isLoggedIn &&
                <NavLink
                    to="/contacts"
                    className={css.nav__link}
                >
                Contacts
                </NavLink>
            }
        </nav>
    )
}