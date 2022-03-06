import PropTypes from 'prop-types';

export function FriendListItem({ friend }) {
  const { avatar, name } = friend;
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};
