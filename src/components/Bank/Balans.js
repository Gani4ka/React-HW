import React from 'react';
import styles from './Balans.module.css';

const balansClasses = [styles.balans];
const greenStyle = {
  color: 'green',
};
const redStyle = {
  color: 'red',
};

const Balans = () => (
  <p className={balansClasses}>
    <span>
      <span style={greenStyle}>&#8593;</span>
      {}$
    </span>
    <span>
      <span style={redStyle}>&darr;</span>
      {}$
    </span>
    <span>Balance: {}$</span>
  </p>
);

export default Balans;
