import css from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import ContactForm from 'components/Form/AddContactForm';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.box}>
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          {contacts.length > 0 ? (
            <div className={css.filterCont}>
              <Filter />
              <ContactList />
            </div>
          ) : (
            <p>No contacts</p>
          )}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}
