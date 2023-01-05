import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          ></FriendListItem>
        ))}
      </ul>
    )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };