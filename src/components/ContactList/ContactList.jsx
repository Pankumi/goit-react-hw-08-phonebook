import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <ul className={css.list}>
      {filterContacts.map(contact => {
        return (
          <li className={css.listItem} key={contact.id}>
            <div>
              <span className={css.name}> {contact.name}</span>:{' '}
              {contact.number}
            </div>
            <button
              className={css.btnDel}
              onClick={() => dispatch(deleteContact(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;