import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Input, FilterLabel } from './Filter.styled';

export default class Filter extends Component {
  render() {
    const { onContactsFilter } = this.props;
    // console.log(onContactsFilter('7'));

    return (
      <Formik
        initialValues={{ filter: '' }}
        handleChange={value => {
          console.log(value);
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          console.log(values);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <FilterLabel htmlFor="filter">
              Find contacts by the name
              <Input
                name="filter"
                id="filter"
                type="text"
                onChange={e => {
                  // console.log(e.target.value);
                  onContactsFilter(e.target.value);
                  handleChange(e);
                }}
              />
            </FilterLabel>
          </Form>
        )}
      </Formik>
    );
  }
}
