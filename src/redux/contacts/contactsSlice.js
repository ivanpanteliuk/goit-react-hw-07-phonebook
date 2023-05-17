import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'redux/operations';
import { handlePending, handleRejected } from './handlers';

const operationsArr = [addContact, deleteContact, getContacts];

const setOperationStatus = status => operationsArr.map(el => el[status]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(getContacts.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, error: null, items: payload };
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          error: null,
          isLoading: false,
          items: [...state.items, payload],
        };
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.filter(item => item.id !== payload.id),
        };
      })

      .addMatcher(isAnyOf(...setOperationStatus('pending')), handlePending)

      .addMatcher(isAnyOf(...setOperationStatus('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
