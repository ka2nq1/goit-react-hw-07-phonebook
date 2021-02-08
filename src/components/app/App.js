import React, { Component } from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { contactStorage } from "../../redux/actions/contactAction";
import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import styles from './App.module.css';
import './App.css';


class App extends Component {
    componentDidMount() {
        const persistedContacts = localStorage.getItem('contacts')

        if (persistedContacts) {
            this.props.contactStorage(JSON.parse(persistedContacts));
        };
    };

    componentDidUpdate(prevProps) {
        const { contacts } = this.props;
        if (prevProps.contacts !== contacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts))
        }
    };
    
    render() {
        const { contacts } = this.props;
        return (
            <div className={styles.container}>
                <CSSTransition
                    in={true}
                    appear={true}
                    classNames='titleTransition'
                    timeout={500}
                    unmountOnExit
                >
                    <h1 className={styles.tytle}>Phonebook</h1>
                </CSSTransition>
                <ContactForm />
                {contacts.length > 0 &&
                    <h2 className={styles.tytle}>Contacts</h2>
                }
                {contacts.length > 1 &&
                    <Filter />
                }
                <ContactList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  contactStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);