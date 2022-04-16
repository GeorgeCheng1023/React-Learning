import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const changeFilterHandler = (data) => {
    setFilterYear(data);
  };
  return (
    <Card className="expenses">
      <h1>{filterYear}</h1>
      <ExpenseFilter onChangeFilter={changeFilterHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
