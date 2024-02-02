import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefresh } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefresh;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
