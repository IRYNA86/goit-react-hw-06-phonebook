import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/store/contactsSlice';
import s from '../ContactList/ContactList.module.css'

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const getFilterContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterContact = getFilterContact();

  return (
    <>
      {filterContact.map(contact => (
        <li className={s.item} key={contact.id}>
          <span className={s.text}>{contact.name}:</span>
          <span> {contact.number} </span>
          <button className={s.button} type="button" onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default ContactList;

