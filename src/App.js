import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddExpenseButton from "./components/NewExpense/AddExpenseButton";

const DATA = [
  {
    name: "Apple",
    amount: 400,
    date: new Date(2022, 3, 4),
    id: Math.round(Math.random() * 10000000000000).toString(),
  },
  {
    name: "Banana",
    amount: 300,
    date: new Date(2022, 4, 11),
    id: Math.round(Math.random() * 10000000000000).toString(),
  },
  {
    name: "Lemon",
    amount: 150,
    date: new Date(2022, 4, 5),
    id: Math.round(Math.random() * 10000000000000).toString(),
  },
  {
    name: "Straw Berry",
    amount: 250,
    date: new Date(2022, 3, 29),
    id: Math.round(Math.random() * 10000000000000).toString(),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DATA);
  const addNewExpenseHandler = (saveExpense) => {
    setExpenses((prevExpense) => {
      return [saveExpense, ...prevExpense];
    });
  };

  const [displayNewExpense, setDisplayNewExpense] = useState(false);
  const displayNewExpenseHandeler = (bol) => {
    // console.log(bol);
    setDisplayNewExpense(bol);
  };

  const showNewExpenseCondition = () => {
    if (displayNewExpense) {
      return (
        <NewExpense
          onAddNewExpense={addNewExpenseHandler}
          onHideNewExpense={displayNewExpenseHandeler}
        />
      );
    } else {
      return <AddExpenseButton onShowNewExpense={displayNewExpenseHandeler} />;
    }
  };
  return (
    <div>
      {showNewExpenseCondition()}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
