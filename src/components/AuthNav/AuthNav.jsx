import { Link } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <nav>
            <Link to="/signup">
                Sign Up
            </Link>
            <Link to="/login">
                Log In
            </Link>
        </nav>
    );
};
