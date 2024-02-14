import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.home}>
            <h1 className={css.home__title}>
                Welcome to{' '}
                <span className={css.home__span}>PhoneBook!</span>
            </h1>
            <NavLink
                to="/signup"
                title='Try it now!'
                className={css.home__link}
            >
                Try it now!
            </NavLink>
            <img
                src={`${process.env.PUBLIC_URL}/img/HeroShapeSwirl.svg`}
                alt="HeroShapeSwirl"
                className={css.home__img}
            />
            {/* <img
                src={`${process.env.PUBLIC_URL}/img/Vector.png`}
                alt="HeroShapeStars"
                className={css.home__img2}
            /> */}
        </div>
    );
}
