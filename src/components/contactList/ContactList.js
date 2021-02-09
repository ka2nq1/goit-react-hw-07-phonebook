import React from 'react';
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getFilteredContact } from "../../redux/contactsSelectors";
import ContactListItem from '../contactListItem/ContactListItem';
import styles from './ContactList.module.css';
import './ContactList.css';

const ContactList = ({ contacts }) => {
    return (
        <div className={styles.container}>
            <TransitionGroup component="ul" className={styles.list}>
                {contacts.map(({ id }) => (
                <CSSTransition key={id} classNames="listItem" timeout={250}>
                    <ContactListItem id={id} />
                </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

const mapStateToProps = (state) => ({
  contacts: getFilteredContact(state)
});

export default connect(mapStateToProps)(ContactList);