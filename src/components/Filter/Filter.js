import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilterContact } from 'components/store/contactsSlice';
import s from '../Filter/Filter.module.css'

function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return <input className={s.input} type="text" value={filterValue} onChange={event => dispatch(getFilterContact(event.target.value))}></input>;
}

export default Filter;
