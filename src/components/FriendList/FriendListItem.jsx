import styles from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
