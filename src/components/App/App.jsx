import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'reduxx/auth/operations';
import { getLoading } from 'reduxx/contacts/selectors';
import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'routesConfig/PrivateRoute';
import { PublicRoute } from 'routesConfig/PublicRoute';
import LinearProgress from '@mui/material-next/LinearProgress';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUp'));
const LogInPage = lazy(() => import('pages/LogIn'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefresh } = useAuth();
    const isLoading = useSelector(getLoading);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <>
        {isRefresh ? (
            <LinearProgress color="primary" variant="indeterminate" />
        ) : (
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/" element={<Layout />}>
                    {/* <Route index element={<HomePage />} /> */}
                    <Route
                        path="/signup"
                        element={
                            <PublicRoute
                            redirectTo="/contacts"
                            component={<SignUpPage />}
                            />
                    }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute redirectTo="/contacts" component={<LogInPage />} />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                            redirectTo="/login"
                            component={<ContactsPage />}
                            />
                        }
                    />
                </Route>
            </Routes>
        )}
        {isLoading && <LinearProgress color="primary" variant="indeterminate" />}
        </>
    );
};
