import { useAuth } from "hooks";
import { Link } from "./Nav.styled";

export const Nav = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <Link
                to="/"
            >
                Home
            </Link>
            {isLoggedIn &&
                <Link to="/contacts">
                    Contacts
                </Link>
            }
        </nav>
    )
}