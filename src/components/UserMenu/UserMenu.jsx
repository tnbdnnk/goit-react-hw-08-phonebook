import { useDispatch } from "react-redux";
import { logOut } from "reduxx/auth/operations";
import { useAuth } from "hooks";

import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.userMenu__wrapper}>
            <p className={css.userMenu__text}>
                Welcome, <span>{user.name}</span> 
            </p>
            <button
                type="button"
                onClick={() => dispatch(logOut())}
                className={css.button__light}
            >
                Log Out
            </button>
        </div>
    )
}