import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contactsAPIService';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsAPI.fetchContacts();
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await contactsAPI.fetchPostContact(contact);
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await contactsAPI.fetchDeleteContact(id);
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
