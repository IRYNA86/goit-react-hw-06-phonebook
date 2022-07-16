import { useState } from 'react';
import shortid from 'shortid';
import s from '../ContactForm/ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  // const handleChange = event => {
  //       const { name, value } = event.currentTarget;
  // [name] - вычисляемые свойства объекта, паттерн
  //   this.setState({ [name]: value });
  // };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     this.props.onSubmit(this.state);
  //     this.reset();
  //   };

  const reset = () => {
    setName('');
    setNumber('');
  };

  // reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={inputNameId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={inputNameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label} htmlFor={inputNumberId}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={inputNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
