import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { selectFilteredContacts } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
