import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectRefresh,
    selectError,
} from 'reduxx/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectRefresh);
    const user = useSelector(selectUser);
    const error = useSelector(selectError);

    return {
        isLoggedIn,
        isRefreshing,
        user,
        error,
    };
};

// const useAuthToken = () => {
//     const token = useSelector(state => state.auth.token);
//     return token;
// };

// export default useAuthToken;
