import styles from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileCard}>
      <div>
        <img className={styles.icon} src={image} alt="User avatar" />
        <p className={styles.title}>{name}</p>
        <p className={styles.subtitle}>@{tag}</p>
        <p className={styles.subtitle}>{location}</p>
      </div>
      <ul className={styles.statsList}>
        <li className={styles.statsListItem}>
          <span>Followers</span>
          <span>
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className={styles.statsListItem}>
          <span>Views</span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
        <li className={styles.statsListItem}>
          <span>Likes</span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
