import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [name, setTitle] = useState(props.name);
  const clickHandler = () => {
    setTitle("Update");
    console.log(name);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">
          {String.fromCharCode(36)}
          {props.price}
        </div>
      </div>
      <button onClick={clickHandler} className="edit">
        Edit
      </button>
    </Card>
  );
};

export default ExpenseItem;
