import React from 'react';
import styles from './Controls.module.css';

const controlsClasses = [styles.controls];

const Controls = () => (
  <section className={controlsClasses}>
    <input type="number" />
    <button type="button">Deposit</button>
    <button type="button">Withdraw</button>
  </section>
);

export default Controls;
