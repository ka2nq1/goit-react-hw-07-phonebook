import React from 'react';
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/contactAction";
import styles from './ContactListItem.module.css';

const ContactListItem = ({name, number, deleteContact}) => {
    return (
        <li className={styles.item}>
            <p className={styles.contact}>
                <span className={styles.name}>{name}:</span>
                <span className={styles.number}>{number}</span>
            </p>
                <button className={styles.btn} type="button" onClick={deleteContact}>x</button>
        </li>
    ); 
}

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(
    (contact) => contact.id === ownProps.id
  );

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
