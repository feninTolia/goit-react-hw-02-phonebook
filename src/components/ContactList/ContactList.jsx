import React, { Component } from 'react';
import ContactItem from './ContactItem';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} />
          ))}
      </ul>
    );
  }
}
