import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.module.css';

const articleClasses = [styles.publication];

const Article = ({ articleNumber, publications }) => (
  <article className={articleClasses}>
    <h2>{publications[articleNumber].title}</h2>
    <p>{publications[articleNumber].text}</p>
  </article>
);

Article.propTypes = {
  articleNumber: PropTypes.number.isRequired,
  publications: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
