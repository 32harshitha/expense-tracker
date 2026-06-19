function Transaction({ transaction, deleteTransaction }) {
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}

      <span>
        ₹{transaction.amount}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

export default Transaction;