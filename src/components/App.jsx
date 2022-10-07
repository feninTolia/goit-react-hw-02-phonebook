import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContactForm = contact => {
    console.log(contact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContactForm} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
