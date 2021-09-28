import { Formik, Form, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from './SearchForm.module.scss';

const SearchForm = ({ search }) => {
  return (
    <Formik
      initialValues={{
        searchText: '',
      }}
      onSubmit={(values) => {
        search(values.searchText);
      }}
    >
      {({ handleChange, handleBlur }) => (
        <Form className={style.search}>
          <Field
            className={style.search__txt}
            name='searchText'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Поиск'
          />
          <span className={style.search__icon}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </Form>
      )}
    </Formik>
  );
};
SearchForm.propTypes = {
  search: PropTypes.func,
};

export default SearchForm;
