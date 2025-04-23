import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
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
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
