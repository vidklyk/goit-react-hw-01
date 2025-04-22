import FriendListItem from '../FriendListItem/FriendListItem';
import friends from '../../friends.json';
import css from './FriendList.module.css';

export default function FriendList() {
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {friends.map(friend => (
          <li className={css.li} key={friend.id}>
            <FriendListItem
              info={friend}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
