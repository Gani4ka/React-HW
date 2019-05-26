import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const transClasses = [styles.trans];
const headerClasses = [styles.header];

const TransactionHistory = ({ items }) => (
  <table className={transClasses}>
    <thead className={headerClasses}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TransactionHistory;
