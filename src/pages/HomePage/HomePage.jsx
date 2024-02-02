import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div>
        <h1 className={css.home__title}>
            Welcome to <span className={css.home__span}>PhoneBook!</span>
        </h1>
        </div>
    );
}
