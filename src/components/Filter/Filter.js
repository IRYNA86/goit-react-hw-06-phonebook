import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css'

function Filter({ value, onChange }) {
  return <input className={s.input} type="text" value={value} onChange={onChange}></input>;
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;
