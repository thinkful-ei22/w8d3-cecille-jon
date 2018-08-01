import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, minLength, isNumber} from './validators';
import Input from './input';

class RegisterForm extends React.Component {
  render () {
    return (
      <div>
       <h1>Report a problem with your delivery</h1>
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        <Field
        component={Input}
        label = 'tracking number'
        type='text'
        name='tracking number'
        id ='tracking-number'
        validate={[required, notEmpty, minLength, isNumber]}
        />
        <div>
        <label htmlFor='issue'>What is your issue?</label>
        <Field component='select' name='issue' id='issue'>
          <option value='first'>My delivery has not arrived</option>
          <option value='second'>The wrong item was delivered</option>
          <option value='third'>Part of my order was missing</option>
          <option value='fourth'>Some of my order arrived damaged</option>
          <option value='fifth'>Other (give details below)</option>
          </Field>
        </div>
        <div>
          <label htmlFor='details'> Give more details(optional)</label>
          <div>
          <textarea rows='4' cols='40' name='details' id='details'></textarea>
          </div>
        </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'report'
})(RegisterForm);
