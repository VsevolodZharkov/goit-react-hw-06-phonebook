import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Contacts/contacts-slice';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  const handlerFilterUsers = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label className={s.form__label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        onChange={handlerFilterUsers}
      />
    </label>
  );
}
