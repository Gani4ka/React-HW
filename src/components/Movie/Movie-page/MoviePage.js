import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';

const moviePageClasses = [styles.container];

const MoviePage = ({ children }) => (
  <div className={moviePageClasses}>{children}</div>
);

export default MoviePage;

MoviePage.propTypes = {
  children: PropTypes.func.isRequired,
};
