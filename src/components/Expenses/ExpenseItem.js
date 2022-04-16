import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [name, setName] = useState(props.name);
  const clickHandler = () => {
    setName("Update");
    console.log(name);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">{props.amount}'s</div>
      </div>
      <button onClick={clickHandler} className="edit">
        Edit
      </button>
    </Card>
  );
};

export default ExpenseItem;
