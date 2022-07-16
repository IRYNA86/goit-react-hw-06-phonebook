import ContactForm from './ContactForm/ContactForm';
import shortid from 'shortid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useState, useEffect } from 'react';
import s from '../components/app.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const data = {
      id: shortid.generate(),
      name,
      number,
    };
    const searchSameName = contacts.some(data => data.name === name);
    if (searchSameName) {
      alert(`${data.name} is already in contacts`);
    } else setContacts(contacts => [data, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterContact = getFilterContact();

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
        margin: 15,
      }}
    >
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h3 className={s.title}>Contacts</h3>
      <p>Find contacts by name</p>
      <Filter value={filter} onChange={changeFilter} />
      <ul>
        <ContactList contacts={filterContact} onDeleteContact={deleteContact} />
      </ul>
    </div>
  );
}

export default App;
