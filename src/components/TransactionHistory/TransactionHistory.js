import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section>
      <table className={css.transaction__history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes={
  transactions:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
    }).isRequired,
  )
}