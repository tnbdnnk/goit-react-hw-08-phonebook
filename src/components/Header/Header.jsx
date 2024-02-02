import { useAuth } from "hooks";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Nav } from "components/Nav/Nav";
import { UserMenu } from "components/UserMenu/UserMenu";
import css from './Header.module.css';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Nav />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </div>
        </header>
    )
}