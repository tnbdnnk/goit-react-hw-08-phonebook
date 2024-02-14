import { useSelector } from 'react-redux';
import {
    selectedUser,
    selectIsLoggedIn,
    selectIsRefreshing
} from 'reduxx/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectedUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};
