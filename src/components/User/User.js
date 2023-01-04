// import user from '../data/user.json'
import PropTypes from 'prop-types';
import css from './Users.module.css';

export const Profile = ({ user }) => {
  return <div className={css.profile}>
  <div className={css.description}>
    <img
      src= {user.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{user.username}</p>
    <p className={css.tag}>{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  </div>

  <ul className={css.stats}>
    <li   className={css.statsItem}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li  className={css.statsItem}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>;
}


Profile.propTypes = {
    user: PropTypes.object,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}



