import { createAsyncThunk } from '@reduxjs/toolkit';
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

import { api } from 'api/API';
import { setAuthHeader } from 'api/API';

const signUpUser = async credentials => {
    const { data } = await api.post(`/users/signup`, credentials);
    return data;
};

export const signUp = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
        try {
        const data = await signUpUser(credentials);
        return data;
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
);

const logInUser = async credentials => {
    const { data } = await api.post(`/users/login`, credentials);
    setAuthHeader(data.token);
    return data;
};

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
        const data = await logInUser(credentials);
        return data;
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
);

const logOutUser = async token => {
    const config = {
        headers: {
        Authorisation: `Bearer ${token}`,
        },
    };
    const { data } = await api.post(`/users/logout`, {}, config);
    return data;
};

export const logOut = createAsyncThunk(
    'auth/logout',
    async (token, { rejectWithValue }) => {
        try {
        const data = await logOutUser(token);
        setAuthHeader('');
        return data;
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
);

const refreshUser = async () => {
    const { data } = await api.get(`/users/current`);
    return data;
};

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const persistedToken = getState().authorisation.token;

        if (persistedToken) {
        setAuthHeader(persistedToken);
        try {
            const data = await refreshUser();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
        }
        return rejectWithValue('No token.');
    }
);

const operations = { signUp, logIn, logOut };
export default operations;
