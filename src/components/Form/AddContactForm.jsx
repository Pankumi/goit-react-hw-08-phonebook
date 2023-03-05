import { useState } from 'react';
import css from './AddContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  // const status = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handelChange = e => {
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

  const handleSubmit = e => {
    if (contacts.some(con => con.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      //alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      e.preventDefault();
      return;
    }
    e.preventDefault();
    // console.log({ name, number });
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <p className={css.title}>Name</p>
        <input
          className={css.input}
          placeholder="Tim Dalton"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handelChange}
        />
      </label>
      <label>
        <p className={css.title}>Number</p>
        <input
          className={css.input}
          placeholder="+380951234567"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handelChange}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;