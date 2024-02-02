import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/API';

const getData = async () => {
    const { data } = await api.get(`/contacts`);
    console.log(data);
    return data;
};

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
        const data = await getData();
        return data;
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
);

const addData = async newContact => {
    const { data } = await api.post(`/contacts`, newContact);
    return data;
};

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
        try {
        const data = await addData(newContact);
        return data;
        } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data);
        }
    }
);

const deleteData = async contactId => {
    const { data } = await api.delete(`/contacts/${contactId}`);
    return data;
};

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
        const data = await deleteData(contactId);
        return data;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);

export const editContact = createAsyncThunk(
    'contacts/editContact',
    async (contact, thunkAPI) => {
        try {
        const { id, name, number } = contact;
        const res = await api.patch(`/contacts/${id}`, { name, number });
        return res.data;
        } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);
