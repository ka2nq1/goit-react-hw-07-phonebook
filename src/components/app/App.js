import React, { Component } from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { itemsSelector } from "../../redux/contactsSelectors";
import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import { getContacts } from '../../redux/contactsOperation';
import styles from './App.module.css';
import './App.css';


class App extends Component {
    componentDidMount() {
        this.props.onGetContacts();
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
  contacts: itemsSelector(state),
});

const mapDispatchToProps = {
  onGetContacts: getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);