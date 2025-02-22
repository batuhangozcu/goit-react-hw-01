import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
 return (
 <div className={styles.card}>
    <div className={styles.cards}>
      <img className={styles.image} src={image} alt="User avatar" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.list}>
      <li className={styles.lists}>
        <span className={styles.topic}>Followers</span>
        <span className={styles.data}>{stats.followers}</span>
      </li>
      <li className={styles.lists}>
        <span className={styles.topic}>Views</span>
        <span className={styles.data}>{stats.views}</span>
      </li>
      <li className={styles.lists}>
        <span className={styles.topic}>Likes</span>
        <span className={styles.data}>{stats.likes}</span>
      </li>
    </ul>
  </div>); 
};

export default Profile;
