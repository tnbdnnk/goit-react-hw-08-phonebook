import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getSortedAlphabetic = state => state.contacts.sortedAlphabetic;
export const getRecentlyAdded = state => state.contacts.recentlyAdded;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filterValue) => {
        const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
        );
        return filteredContacts;
    }
);
