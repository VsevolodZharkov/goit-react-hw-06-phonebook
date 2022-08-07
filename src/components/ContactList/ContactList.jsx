import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts-slice';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const getSearchContacts = () => {
    return contacts.filter(name =>
      name.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {getSearchContacts()?.map(({ id, name, number }) => {
        return (
          <li className={s.contact__item} key={id}>
            <p className={s.contact__text}>
              Name: <span className={s.contact__num}>{name}</span>
            </p>
            <p className={s.contact__text}>
              Phone: <span className={s.contact__num}>{number}</span>
            </p>

            <button
              className={s.contact__btn}
              type="button"
              onClick={() => handlerDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
