import { useDispatch } from 'react-redux';
import { logIn } from 'reduxx/auth/operations';

// import css from './LogInForm.module.css';
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
        );

        form.reset();
    };

    return (
        <form
            autoComplete="off"
            onSubmit={handleLogIn}
            className={css.form}
        >
            <label
                className={css.form__label}
                htmlFor="email">
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
                htmlFor="password">
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
        </form>
    );
};