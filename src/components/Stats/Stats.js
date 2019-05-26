import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const statsClasses = [styles.stats];
const titleClasses = [styles.title];
const listClasses = [styles.list];
const itemClasses = [styles.item];
const labelClasses = [styles.label];
const percentageClasses = [styles.percentage];

const Stats = ({ stats, title }) => (
  <section className={statsClasses}>
    {title && <h2 className={titleClasses}>{title}</h2>}
    <ul className={listClasses}>
      {stats.map(stat => (
        <li key={stat.id} className={itemClasses}>
          <span className={labelClasses}>{stat.label}</span>
          <span className={percentageClasses}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: null,
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

export default Stats;
