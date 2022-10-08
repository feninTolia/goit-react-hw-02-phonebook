import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '0993859606' },
      { id: 'id-2', name: 'Hermione Kline', number: '0503000643' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContactForm = contact => {
    const { contacts } = this.state;
    if (contacts.some(el => el.number === contact.number)) {
      window.alert(`${contact.number} is already exist in your phonebook`);
      return;
    }

    if (contacts.some(el => el.name === contact.name)) {
      window.alert(`${contact.name} is already exist in your phonebook`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    console.log(this.state);
  };

  handleDeleteContact = userId => {
    const { contacts } = this.state;
    console.log(userId);
    console.log(contacts);
    const updatedContactList = contacts.filter(el => el.id !== userId);
    console.log(updatedContactList);
    this.setState(() => ({
      contacts: updatedContactList,
    }));
  };

  handleContactsFilter = namePart => {
    const { contacts } = this.state;
    console.log(namePart);
    let FiltredContacts = contacts.filter(e =>
      e.name.toLowerCase().includes(namePart.toLowerCase())
    );
    console.log(FiltredContacts);

    if (namePart === '') {
      FiltredContacts = '';
    }

    this.setState(() => ({
      filter: FiltredContacts,
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContactForm} />

        <h2>Contacts</h2>
        <Filter onContactsFilter={this.handleContactsFilter} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}
