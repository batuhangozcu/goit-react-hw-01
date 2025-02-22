import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.layout}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
