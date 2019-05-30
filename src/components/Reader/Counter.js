import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const counterClasses = [styles.counter];

const Counter = ({ articleNumber, numberOfAllArticles }) => (
  <p className={counterClasses}>
    {articleNumber + 1}/{numberOfAllArticles}
  </p>
);

Counter.propTypes = {
  articleNumber: PropTypes.number.isRequired,
  numberOfAllArticles: PropTypes.number.isRequired,
};

export default Counter;
