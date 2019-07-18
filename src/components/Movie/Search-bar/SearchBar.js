import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const searchBarClasses = [styles.input];

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    className={searchBarClasses}
    onChange={onChange}
  />
);

export default SearchBar;

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
