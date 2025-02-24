import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.tables}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} 
            id={friend.id}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
