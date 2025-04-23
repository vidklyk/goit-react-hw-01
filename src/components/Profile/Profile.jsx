import css from './Profile.module.css';

export default function Profile({ user }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={user.avatar} alt="User avatar" />
        <p>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </div>
      <ul className={css.ul}>
        <li className={css.li}>
          <span className={css.span}>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
