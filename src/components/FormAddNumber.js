import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Input, Label } from './Contacts.Styled';

export default class FormAddNumber extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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
            type="text"
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
          ></Input>
        </div>
        <div>
          <Label htmlFor={numberId}> Number</Label>
          <Input
            type="tel"
            name="number"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number"
            required
          ></Input>
        </div>
        {invalidForm ? <div>Будь ласка заповніть поля</div> : null}
        <Button type="button"> Додати контакт</Button>
      </form>
    );
  }
}
