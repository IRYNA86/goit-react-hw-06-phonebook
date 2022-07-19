import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    filter: '',
  };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action){
            state.items.push(action.payload)
            
        },
        getFilterContact(state, action){
            state.filter = action.payload;
        },
        deleteContact(state, action){
            state.items = state.items.filter(({ id }) => id !== action.payload);
        },
    }
})

export const {addContact, getFilterContact, deleteContact} = contactsSlice.actions;

export default contactsSlice.reducer;