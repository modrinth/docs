import React from 'react';
import styles from './UserCard.module.css';

const UserCard = ({ avatar, username, profileLink }) => {
  return (
      <div className={styles.userCard}>
        <img className={styles.avatar} src={avatar} alt={`${username}'s avatar`} />
        <h2 className={styles.username}>{username}</h2>
        <a href={profileLink} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
  );
};

export default UserCard;
