import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Input, Label, Notifie } from './Contacts.Styled';

export default class FormAddNumber extends Component {
  state = {
    name: '',
    number: '',
    invalidForm: false,
  };

  contactsId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      invalidForm: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const isValid = this.validateForm(this.state);
    if (isValid) {
      this.props.onSubmit({ name, number });
      this.setState({
        name: '',
        number: '',
      });
    } else {
      this.setState({
        invalidForm: true,
      });
    }
  };

  validateForm = data => {
    const isValid = !!data.name && !!data.number;
    return isValid;
  };

  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;
    const { invalidForm } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor={nameId}>Name </Label>
          <Input
            id={nameId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={handleChange}
            minLength={3}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
          ></Input>
        </div>
        <div>
          <Label htmlFor={numberId}> Number</Label>
          <Input
            id={numberId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={handleChange}
            minLength={3}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number"
          ></Input>
        </div>
        {invalidForm ? <Notifie>Будь ласка заповніть поля</Notifie> : null}
        <Button type="button"> Додати контакт</Button>
      </form>
    );
  }
}
