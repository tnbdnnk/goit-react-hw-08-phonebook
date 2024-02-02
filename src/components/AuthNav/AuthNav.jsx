import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
    return (
        <div>
        <NavLink to="/signup" className={css.authNav__link}>
            Sign In
        </NavLink>
        <NavLink to="/login" className={css.authNav__link}>
            Log In
        </NavLink>
        </div>
    );
};
