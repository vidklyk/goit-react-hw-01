import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={css.li} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
}
