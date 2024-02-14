import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
    'auth/signup',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            const { user, token } = res.data;
            console.log(res.data);

            setAuthHeader(token);
            return { user, token };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);

            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
// import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com/',
// });

// const setAuthHeader = token => {
//     api.defaults.headers.common.Authorization = `Bearer ${token}`
// };

// const clearAuthHeader = () => {
//     api.defaults.headers.common.Authorization = '';
// };

// import { api } from 'api/API';
// import { setAuthHeader } from 'api/API';

// const signUpUser = async credentials => {
//     const { data } = await api.post(`/users/signup`, credentials);
//     return data;
// };

// export const signUp = createAsyncThunk(
//     'auth/signup',
//     async (credentials, { rejectWithValue }) => {
//         try {
//         const data = await signUpUser(credentials);
//         return data;
//         } catch (error) {
//         return rejectWithValue(error.response.data);
//         }
//     }
// );

// const logInUser = async credentials => {
//     const { data } = await api.post(`/users/login`, credentials);
//     setAuthHeader(data.token);
//     return data;
// };

// export const logIn = createAsyncThunk(
//     'auth/login',
//     async (credentials, { rejectWithValue }) => {
//         try {
//         const data = await logInUser(credentials);
//         return data;
//         } catch (error) {
//         return rejectWithValue(error.response.data);
//         }
//     }
// );

// const logOutUser = async token => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     };
//     const { data } = await api.post(`/users/logout`, {}, config);
//     return data;
// };

// export const logOut = createAsyncThunk(
//     'auth/logout',
//     async (token, { rejectWithValue }) => {
//         try {
//         const data = await logOutUser(token);
//         setAuthHeader('');
//         return data;
//         } catch (error) {
//         return rejectWithValue(error.response.data);
//         }
//     }
// );

// const refreshUser = async () => {
//     const { data } = await api.get(`/users/current`);
//     return data;
// };

// export const refresh = createAsyncThunk(
//     'auth/refresh',
//     async (_, { rejectWithValue, getState }) => {
//         const persistedToken = getState().authorisation.token;

//         if (persistedToken) {
//         setAuthHeader(persistedToken);
//         try {
//             const data = await refreshUser();
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//         }
//         return rejectWithValue('No token.');
//     }
// );

// const operations = { signUp, logIn, logOut };
// export default operations;
