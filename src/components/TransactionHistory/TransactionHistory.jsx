import transactions from '../../transactions.json';
import css from './TransactionHistory.module.css';

export default function TransactionHisory() {
  return (
    <table className={css.container}>
      <thead>
        <tr className={css.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.td}>{transaction.type}</td>
            <td className={css.td}>{transaction.amount}</td>
            <td className={css.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
