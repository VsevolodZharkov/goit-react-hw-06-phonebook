import { createSlice } from '@reduxjs/toolkit';

const defState = {
  contacts: [],
  filter: '',
};

const contactManager = createSlice({
  name: 'contact',
  defState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
		
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },

    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactManager.actions;

export default contactManager.reducer;
