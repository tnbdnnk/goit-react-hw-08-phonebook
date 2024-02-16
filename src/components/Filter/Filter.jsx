import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'reduxx/contacts/filterSlice';
import { getFilter } from 'reduxx/contacts/selectors';

import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const showFilteredContacts = e => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <input
            placeholder="Find contacts by name"
            className={css.filter__input}
            value={filter.filter}
            type="search"
            onChange={showFilteredContacts}
        />
    );
};