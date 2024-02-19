import { useDispatch } from "react-redux";
import { signUp } from 'reduxx/auth/operations';

// import css from './SignUpForm.module.css';
import css from 'cssCommonComponents/cssUtils.module.css'
import { NavLink } from "react-router-dom";

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
        );

        form.reset();
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
