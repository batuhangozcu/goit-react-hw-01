import styles from "../FriendList/FriendList.module.css"

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div className={styles.table}>
      <img className={styles.avatars} src={avatar} alt="Avatar" width="48" />
      <p className={styles.friends}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem;
