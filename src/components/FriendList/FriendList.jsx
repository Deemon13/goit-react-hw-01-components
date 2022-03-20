import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem';

export function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name }) => {
        return (
          <li key={id} className="item">
            <FriendListItem avatar={avatar} name={name} />
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
