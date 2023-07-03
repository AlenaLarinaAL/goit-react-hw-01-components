import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ items }) => {
  return (
    <ul className={css.stat__list}>
      {items.map((item, index) => (
        <li className={`${css.item} ${css[`item-${index + 1}`]}`} key={item.id}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

