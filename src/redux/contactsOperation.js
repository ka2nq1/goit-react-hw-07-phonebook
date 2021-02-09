import axios from 'axios';
import {
    addContactSuccess,
    addContactError,
    addContactRequest,
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError
} from './actions/contactAction';

export const addContact = (name, number) => dispatch => {
    dispatch(addContactRequest());

    axios
        .post('http://localhost:2000/contacts', { name, number, completed: false })
        .then(({data}) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)))
}

export const getContacts = () => dispatch => {
    dispatch(getContactsRequest());

    axios
        .get('http://localhost:2000/contacts')
        .then(({ data }) => dispatch(getContactsSuccess(data)))
        .catch(error => dispatch(getContactsError(error)))
}

export const removeContact = id => dispatch => {
    dispatch(removeContactRequest());

    axios.delete(`http://localhost:2000/contacts/${id}`)
        .then(() => dispatch(removeContactSuccess(id)))
        .catch(error => dispatch(removeContactError(error)))
}