import css from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={css[isOnline ? 'isOnline' : 'isOffline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
}
