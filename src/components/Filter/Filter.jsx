import { useDispatch, useSelector } from 'react-redux';
import { handleFilterSlice } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(handleFilterSlice(e.target.value));
  };

  return (
    <div className={css.box}>
      <label className={css.filter}>
        <p className={css.title}>Find contacts by name</p>
        <input
          className={css.inputFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
