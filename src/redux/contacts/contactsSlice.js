import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const extraActions = [addContact, fetchContacts, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    handleFilterSlice: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const { handleFilterSlice } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
