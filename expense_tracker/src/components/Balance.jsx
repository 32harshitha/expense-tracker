function Balance({ transactions }) {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h2>₹{total}</h2>
    </>
  );
}

export default Balance;