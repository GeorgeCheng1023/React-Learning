import "./App.css";
import Expenses from "./components/Expenses";
const expenses = [
  { name: "Apple", price: 400, date: new Date(2022, 3, 4) },
  { name: "Banana", price: 300, date: new Date(2022, 4, 11) },
  { name: "Lemon", price: 150, date: new Date(2022, 4, 5) },
  { name: "Straw Berry", price: 250, date: new Date(2022, 3, 29) },
];
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
