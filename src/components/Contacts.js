import { Component } from 'react';
import FormAddNumber from './FormAddNumber';
import ContactsList from './Contactslist';
import { nanoid } from 'nanoid';
import {
  Input,
  Title,
  Add,
  Container,
  Label,
  List,
  FilterName,
} from './Contacts.Styled';

export default class Contacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts?.length) {
      this.setState({
        saveContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentWillUnmount() {
    localStorage.removeItem('contacts');
  }

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(
        `${contact.name} - ${contact.number} is already on the site`
      );
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);

      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = e => {
    const { title, value } = e.target;
    this.setState({
      [title]: value,
    });
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter);
      return result;
    });

    return filteredContacts;
  }

  render() {
    const { addContact, removeContact, handleChange } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <Container>
        <Title>Телефонна книга</Title>
        <div>
          <Add>
            <FormAddNumber onSubmit={addContact} />
          </Add>
          <FilterName>
            <List> Контакти</List>
            <Label>Знайти контакт за ім'ям</Label>
            <Input
              type="text"
              name="filter"
              onChange={handleChange}
              value={filter}
              placeholder="Filter"
            ></Input>{' '}
          </FilterName>
          <ContactsList items={contacts} removeContact={removeContact} />
        </div>
      </Container>
    );
  }
}
