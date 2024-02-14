import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './operations';
// import { Notify } from 'notiflix';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
            console.log('sign up action', action);
            console.log('sign up payload', action.payload);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled, state => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
            state.isRefreshing = false;
        })
        // .addCase(logIn.rejected, (state, action) => {
        //     state.error = action.payload;
        //     Notify.failure('Wrong email or password! Please try again.');
        // });
    },
  // extraReducers: builder => {
  //     builder
  //         .addCase(register.fulfilled, (state, action) => {
  //             state.user = action.payload.user;
  //             state.token = action.payload.token;
  //             state.isLoggedIn = true;
  //         })
  //         .addCase(logIn.fulfilled, (state, action) => {
  //             state.user = action.payload.user;
  //             state.token = action.payload.token;
  //             state.isLoggedIn = true;
  //         })
  //         .addCase(logOut.fulfilled, state => {
  //             state.user = { name: null, email: null };
  //             state.isLoggedIn = false;
  //             state.token = null;
  //         })
  //         .addCase(refresh.pending, state => {
  //             state.isRefresh = true;
  //         })
  //         .addCase(refresh.fulfilled, (state, action) => {
  //             state.user = action.payload;
  //             state.isLoggedIn = true;
  //             state.isRefresh = false;
  //         })
  //         .addCase(refresh.rejected, state => {
  //             state.isRefresh = false;
  //         });
  // },
});

export const authReducer = authSlice.reducer;
