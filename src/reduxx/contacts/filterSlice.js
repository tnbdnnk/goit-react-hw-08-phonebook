import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts(state, action) {
            // state.filter = action.payload;
            return (state = action.payload);
        },
    },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
