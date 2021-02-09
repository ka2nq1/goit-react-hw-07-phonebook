import React from 'react';
import { connect } from "react-redux";
import { removeContact } from "../../redux/contactsOperation";
import { getContactById } from "../../redux/contactsSelectors";
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
  const contact = getContactById(state, ownProps.id);

  return { ...contact };  
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
