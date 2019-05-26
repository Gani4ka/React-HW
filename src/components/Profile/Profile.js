import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const profileClasses = [styles.profile];
const detailsClasses = [styles.details];
const avatarClasses = [styles.avatar];
const nameClasses = [styles.name];
const statsClasses = [styles.stats];
const labelClasses = [styles.label];
const quantityClasses = [styles.quantity];

const Profile = ({ user }) => (
  <div className={profileClasses}>
    <div className={detailsClasses}>
      <img src={user.avatar} alt="user avatar" className={avatarClasses} />
      <p className={nameClasses}>{user.name} </p>
      <p className="tag">{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>
    <ul className={statsClasses}>
      {Object.entries(user.stats).map(entry => (
        <li key={Math.random()}>
          <span className={labelClasses}>{entry[0]}</span>
          <span className={quantityClasses}>{entry[1]}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Profile;
