import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, FilterLabel } from './Filter.styled';

export default class Filter extends Component {
  render() {
    return (
      <Formik
        initialValues={{ filter: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FilterLabel htmlFor="filter">
            Find contacts by the name
            <Input name="filter" id="filter" type="text" />
          </FilterLabel>
        </Form>
      </Formik>
    );
  }
}
