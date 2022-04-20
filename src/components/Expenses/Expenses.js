import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const changeFilterHandler = (data) => {
    setFilterYear(data);
  };
  const filtedExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filterYear
  );
  return (
    <Card className="expenses">
      <h1>{filterYear}</h1>
      <ExpenseFilter onChangeFilter={changeFilterHandler} />
      <ExpenseChart />
      <ExpenseList expenses={filtedExpense} />
    </Card>
  );
}

export default Expenses;
