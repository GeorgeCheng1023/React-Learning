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
      <ExpenseItem
        name={props.expenses[0].name}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        name={props.expenses[1].name}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        name={props.expenses[2].name}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        name={props.expenses[3].name}
        price={props.expenses[3].price}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
