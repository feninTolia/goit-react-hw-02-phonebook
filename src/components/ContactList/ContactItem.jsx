import React, { Component } from 'react';

export default class ContactItem extends Component {
  render() {
    const { id, name, number } = this.props;

    return (
      <li>
        <span>{name} </span>
        <span>{number} </span>
        <button>delete</button>
      </li>
    );
  }
}
