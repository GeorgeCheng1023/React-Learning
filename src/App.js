import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  { name: "Apple", price: 400, date: new Date(2022, 3, 4) },
  { name: "Banana", price: 300, date: new Date(2022, 4, 11) },
  { name: "Lemon", price: 150, date: new Date(2022, 4, 5) },
  { name: "Straw Berry", price: 250, date: new Date(2022, 3, 29) },
];
function App() {
  const addNewExpenseHandler = (saveExpense) => {
    console.log(saveExpense);
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
