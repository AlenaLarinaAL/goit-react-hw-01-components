import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friend__section}>
      <ul className={css.friend__list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span
              className={clsx(css.statusItem, {
                [css.isOnline]: friend.isOnline,
              })}
            ></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ).isRequired,
};