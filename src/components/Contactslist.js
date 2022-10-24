import PropTypes from 'prop-types';
import { List, Oll, Num, Close } from './Contacts.Styled';

export default function ContactsList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <Oll key={id}>
        {' '}
        {name}.<Num>Номер: {number} </Num>
        <Close onClick={() => removeContact(id)}>X</Close>
      </Oll>
    );
  });
  return (
    <>
      <List>Список контактів</List>
      <ol>{elements}</ol>
    </>
  );
}

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
