import { useDispatch } from "react-redux";
import { signUp } from 'reduxx/auth/operations';
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import css from 'cssCommonComponents/cssUtils.module.css'

export const SignUpForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        dispatch(
            signUp({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        ).then(action => {
            console.log(action.type)
            if (action.type === 'auth/signup/rejected') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An account with that email adress already exist. Please, enter another or try to log in.',
                    color: '#000',
                    padding: '12px 36px 24px 36px',
                    confirmButtonColor: '#000',
                    confirmButtonText: 'OK',
                    width: '420px',
                });
            } else if (action.type === 'auth/signup/fulfilled') {
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully registered. Enjoy!',
                    color: '#000',
                    padding: '12px 36px 24px 36px',
                    confirmButtonColor: '#000',
                    confirmButtonText: 'OK',
                    width: '420px',
                });
                form.reset();
            }
        })
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className={css.form}
        >
            <label
                htmlFor="username"
                className={css.form__label}
            >
                Username
            </label>
            <input
                type="text" 
                name="name" 
                id="name"
                placeholder="Enter your username"
                className={css.form__input}
            />
            
            <label
                className={css.form__label}
                htmlFor="email"
            >
                Email
            </label>
            <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Enter your email"
                className={css.form__input}
            />
            
            <label
                htmlFor="password"
                className={css.form__label}
            >
                Password
            </label>
            <input 
                type="password" 
                name="password" 
                id="password"
                placeholder="Create a password"
                className={css.form__input}
            />
            
            <button
                type="submit"
                className={css.button__dark}
            >
                Register
            </button>

            <p className={css.form__text}>
                Already have an account?{' '}
                <NavLink
                    to='/login'
                    className={css.form__navlink}
                >
                    Log In.
                </NavLink>
            </p>
        </form>
    )
}
