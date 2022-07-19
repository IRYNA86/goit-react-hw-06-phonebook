import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from '../components/app.module.css';

function App() {
  
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
      <ContactForm  />
      <h3 className={s.title}>Contacts</h3>
      <p>Find contacts by name</p>
      <Filter />
      <ul>
        <ContactList  />
      </ul>
    </div>
  );
}

export default App;
