import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridClasses = [styles.card];

const MovieGridItem = ({ id, title, posterUrl, overview }) => (
  <div id={id} className={MovieGridClasses}>
    <img src={posterUrl} alt={title} />
    <div>
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default MovieGridItem;

MovieGridItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
