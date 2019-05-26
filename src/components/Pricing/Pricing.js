import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem/PricingItem';
import styles from './Pricing.module.css';

const pricingClasses = [styles.pricing];

const Pricing = ({ plans }) => (
  <ul className={pricingClasses}>
    {plans.map(plan => (
      <PricingItem
        key={plan.label}
        label={plan.label}
        icon={plan.icon}
        capacity={plan.capacity}
        price={plan.price}
        color={plan.color}
        description={plan.description}
      />
    ))}
  </ul>
);

Pricing.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Pricing;
