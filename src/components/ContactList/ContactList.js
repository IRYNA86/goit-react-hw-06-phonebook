import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <span className={s.text}>{contact.name}:</span>
          <span> {contact.number} </span>
          <button className={s.button} type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
