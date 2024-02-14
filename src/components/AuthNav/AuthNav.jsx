// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
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
