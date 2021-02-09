import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction('contacts/addRequest');
export const addContactSuccess = createAction('contacts/addSuccess');
export const addContactError = createAction('contacts/addError');

export const getContactsRequest = createAction('contacts/getRequest');
export const getContactsSuccess = createAction('contacts/getSuccess');
export const getContactsError = createAction('contacts/getError');

export const removeContactRequest = createAction('contacts/removeRequest');
export const removeContactSuccess = createAction('contacts/removeSuccess');
export const removeContactError = createAction('contacts/removeError');

export const contactStorage = createAction("@contact/storage");
export const handleFilter = createAction("@contact/filter", ({ target }) => ({
  payload: target.value,
}));