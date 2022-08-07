import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Contacts/contacts-slice';


export default function Filter() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  const handlerFilterUsers = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={name}
        onChange={handlerFilterUsers}
      />
    </label>
  );
}
