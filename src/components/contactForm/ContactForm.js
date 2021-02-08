import React, { Component } from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { addContact } from "../../redux/actions/contactAction";
import styles from './ContactForm.module.css';
import './ContactForm.css';

class ContactForm extends Component {
    formInitialState = {
      name: "",
      number: "",
    };

    state = {
      ...this.formInitialState,
      alert: false,
    };

    handleChange = e => {
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
    const { name, number, alert } = this.state;
    e.preventDefault();

    const { contacts } = this.props;
    const isExists = contacts.find((contact) => contact.name === name);

    if (isExists) {
      this.alertToggle(alert);
      return this.reset();
    }

    this.props.addContact(name, number);
    this.reset();
    };
  
    reset = () => {
      this.setState({ ...this.formInitialState });
    };
  
    alertToggle = (status) => {
      this.setState({ alert: !status });
    };

    render() {
        const { name, number, alert } = this.state;
        const alertDelay = () => this.setState({ alert: !alert });
        return (
            <>
                <CSSTransition
                  in={alert}
                  classNames="Alert"
                  timeout={1500}
                  unmountOnExit
                  onEntered={alertDelay}
                >
                    <button
                        onClick={this.alertToggle}
                        className="AlertBtn"
                    >{`Contact already exists!`}</button>
                </CSSTransition>
                <div className={styles.container}>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input className={styles.input} type='text' id='name' name='name' placeholder="Name Surname" value={name} onChange={this.handleChange} />
                        <label className={styles.label} htmlFor='number'>Number</label>
                        <input className={styles.input} type='text' id='number' name='number' placeholder="0667773377" value={number} onChange={this.handleChange} />
                        <button type="submit" className={styles.btn}>Add contact</button>
                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);