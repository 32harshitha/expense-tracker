import { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add New Transaction</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>

          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;