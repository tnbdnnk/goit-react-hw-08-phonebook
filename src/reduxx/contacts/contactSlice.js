import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
    addContact,
    deleteContact,
    getContacts,
    editContact,
} from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
        sortedAlphabetic: true,
        recentlyAdded: true,
    },

    reducers: {
        sortByName(state) {
        state.contacts = state.contacts.sort((firstContact, secondContact) =>
            state.sortedAlphabetic
            ? firstContact.name.localeCompare(secondContact.name)
            : secondContact.name.localeCompare(firstContact.name)
        );
        state.sortedAlphabetic = !state.sortedAlphabetic;
        },
        sortByAdded(state) {
        state.contacts = state.contacts.sort((firstContact, secondContact) =>
            state.recentlyAdded
            ? firstContact.id.localeCompare(secondContact.id)
            : secondContact.id.localeCompare(firstContact.id)
        );
        state.recentlyAdded = !state.recentlyAdded;
        },
    },

    extraReducers: builder => {
        builder
        .addCase(getContacts.pending, handlePending)
        .addCase(addContact.pending, handlePending)
        .addCase(deleteContact.pending, handlePending)
        .addCase(editContact.pending, (state, action) => {
            state.isLoading = true;
            state.shouldOpenModal = true;
        })

        .addCase(getContacts.rejected, handleRejected)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.rejected, handleRejected)

        .addCase(getContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.contacts.unshift(action.payload);
            state.isLoading = false;
            state.error = null;
            Notiflix.Notify.success(
            `${action.payload.name} has been successfully added to your phonebook`
            );
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload.id
            );
            Notiflix.Notify.success(
            `${action.payload.name} has been successfully deleted from your phonebook`
            );
        })
        .addCase(editContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.findIndex(
            contact => contact.id === action.payload.id
            );
            state.contacts[index] = action.payload;
        });
    },

  // extraReducers: builder => {
  //     builder
  //         .addCase(fetchContacts.fulfilled, (state, action) => {
  //             state.contacts = action.payload;
  //             state.loading = false;
  //             state.error = null;
  //         })
  //         .addCase(fetchContacts.pending, state => {
  //             state.loading = true;
  //         })
  //         .addCase(fetchContacts.rejected, (state, action) => {
  //             state.loading = false;
  //             state.error = action.payload;
  //         })
  //         .addCase(addContact.pending, state => {
  //             state.loading = true;
  //         })
  //         .addCase(addContact.fulfilled, (state, action) => {
  //             state.loading = false;
  //             state.error = null;
  //             state.contacts.push(action.payload);
  //         })
  //         .addCase(addContact.rejected, (state, action) => {
  //             state.loading = false;
  //             state.error = action.payload;
  //         })
  //         .addCase(deleteContact.fulfilled, (state, action) => {
  //             state.contacts = state.contacts.filter(
  //             contact => contact.id !== action.payload.id
  //             );
  //             state.loading = false;
  //         })
  //         .addCase(deleteContact.pending, (state, action) => {
  //             state.loading = true;
  //         })
  //         .addCase(deleteContact.rejected, (state, action) => {
  //             state.loading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const contactReducer = contactsSlice.reducer;
export const { sortByName, sortByAdded, toggleShowFavorites } =
    contactsSlice.actions;
