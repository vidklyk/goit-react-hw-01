import userData from '../../userData.json';
import css from './Profile.module.css';

export default function Profile() {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={userData.avatar} alt="User avatar" />
        <p>{userData.username}</p>
        <p>{userData.tag}a</p>
        <p>{userData.location}</p>
      </div>
      <ul className={css.ul}>
        <li className={css.li}>
          <span className={css.span}>Followers</span>
          <span>{userData.stats.followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Views</span>
          <span>{userData.stats.views}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Likes</span>
          <span>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
