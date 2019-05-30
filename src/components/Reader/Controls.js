import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const controlsClasses = [styles.controls];
const buttonClasses = [styles.button];

const Controls = ({
  handleDecrement,
  handleIncrement,
  isIncreamentDesabled,
  isDecreamentDesabled,
}) => (
  <section className={controlsClasses}>
    <button
      className={buttonClasses}
      disabled={isDecreamentDesabled}
      type="button"
      onClick={handleDecrement}
    >
      Назад
    </button>
    <button
      className={buttonClasses}
      disabled={isIncreamentDesabled}
      type="button"
      onClick={handleIncrement}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  isIncreamentDesabled: PropTypes.bool.isRequired,
  isDecreamentDesabled: PropTypes.bool.isRequired,
};

export default Controls;
