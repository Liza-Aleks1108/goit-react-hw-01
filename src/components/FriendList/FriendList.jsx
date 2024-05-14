import FriendListItem from './FriendListItem.jsx';
import styles from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.friendsListItem} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
