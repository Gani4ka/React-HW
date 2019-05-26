import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const pricingItemClasses = [styles.item];
const titleClasses = [styles.title];
const imgClasses = [styles.img];
const capacityClasses = [styles.capacity];
const descClasses = [styles.desc];
const priceClasses = [styles.price];
const btnClasses = [styles.button];

const PricingItem = ({ label, icon, capacity, price, color, description }) => (
  <li key={label} className={pricingItemClasses}>
    <div>
      <i className={imgClasses} style={{ backgroundImage: `url(${icon})` }} />
      <h2 className={titleClasses} style={{ color: `${color}` }}>
        {label}
      </h2>
      <p className={capacityClasses}>{capacity} storage</p>
      <p className={descClasses}>{description}</p>
      <p className={priceClasses}>${price}/MO</p>
      <button
        type="button"
        className={btnClasses}
        style={{ backgroundColor: `${color}` }}
      >
        Get Started
      </button>
    </div>
  </li>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
