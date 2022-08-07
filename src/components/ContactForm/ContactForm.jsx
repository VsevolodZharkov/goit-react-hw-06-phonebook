import { addContact } from '../../redux/Contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './ContactForm.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    const repeatCont = contacts?.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatCont) {
      alert(`Sorry:( , but ${name} already in contacts`);
      return;
    }

    const id = nanoid();
    const user = { name, number, id };
    dispatch(addContact(user));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label className={s.form__label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.form__label}>
        Phone
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={s.contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
