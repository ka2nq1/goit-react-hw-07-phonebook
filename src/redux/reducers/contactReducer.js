import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
  contactStorage,
  handleFilter,
} from "../actions/contactAction";

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

export const items = createReducer([], {
  [getContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: removeContact,
  [contactStorage]: (state, { payload }) => payload,
});

export const filter = createReducer("", {
  [handleFilter]: (state, { payload }) => (state = payload),
});