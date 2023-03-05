import { useRef } from 'react';
import css from './AddContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;
    if (contacts.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    e.target.reset();
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
          ref={nameInputRef}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.title}>Number</p>
        <input
          className={css.input}
          placeholder="+380951234567"
          type="tel"
          name="number"
          ref={numberInputRef}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;