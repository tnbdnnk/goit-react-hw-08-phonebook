import { useDispatch } from 'react-redux';
import { logIn } from 'reduxx/auth/operations';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

import css from 'cssCommonComponents/cssUtils.module.css'

export const LogInForm = () => {
    const dispatch = useDispatch();

    const handleLogIn = e => {
        e.preventDefault();

        const form = e.currentTarget;

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        ).then(action => {
            if (action.type === 'auth/login/rejected') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password. Please try again.',
                    color: '#000',
                    padding: '12px 36px 24px 36px',
                    confirmButtonColor: '#000',
                    confirmButtonText: 'OK',
                    width: '420px',
                });
            } else if (action.type === 'auth/login/fulfilled') {
                Swal.fire({
                    icon: 'success',
                    text: 'Logged in successfully!',
                    color: '#000',
                    padding: '12px 36px 24px 36px',
                    confirmButtonColor: '#000',
                    confirmButtonText: 'OK',
                    width: '420px',
                });
                form.reset();
            }
        })
    };

    return (
        <form
            autoComplete="off"
            onSubmit={handleLogIn}
            className={css.form}
        >
            <label
                className={css.form__label}
                htmlFor="email"
            >
                Email
            </label>
            <input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                className={css.form__input}
            />
            <label 
                className={css.form__label}
                htmlFor="password"
            >
                Password
            </label>
                <input 
                    placeholder="Enter your password"
                    type="password" 
                    name="password" 
                    id="password" 
                    className={css.form__input}
                />
            <button
                type="submit"
                className={css.button__dark}
            >
                Log In{' '}
            </button>

            <p className={css.form__text}>
                Don't have an account?{' '}
                <NavLink
                    to='/signup'
                    className={css.form__navlink}
                >
                    Sign Up.
                </NavLink>
            </p>
        </form>
    );
};