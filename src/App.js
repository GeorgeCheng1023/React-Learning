import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DATA = [
  { name: "Apple", amount: 400, date: new Date(2022, 3, 4) },
  { name: "Banana", amount: 300, date: new Date(2022, 4, 11) },
  { name: "Lemon", amount: 150, date: new Date(2022, 4, 5) },
  { name: "Straw Berry", amount: 250, date: new Date(2022, 3, 29) },
];
function App() {
  const [expenses, setExpenses] = useState(DATA);
  const addNewExpenseHandler = (saveExpense) => {
    setExpenses((prevExpense) => {
      console.log(expenses);
      return [saveExpense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
