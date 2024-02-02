import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/slice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        contacts: contactReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
