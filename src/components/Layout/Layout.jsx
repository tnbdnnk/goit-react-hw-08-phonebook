import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/Header/Header";

import css from './Layout.module.css';

export const Layout = () => {
    return (
        <div className={css.content__wrapper}>
            <AppBar />
            <Suspense fallback={'Loading...'}>
                <Outlet/>
            </Suspense>
        </div>
    )
}