import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 50000,
    },
    {
      id: 2,
      text: "Groceries",
      amount: -5000,
    },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;