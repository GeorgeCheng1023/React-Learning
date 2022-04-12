import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
function ExpenseItem(props) {
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
    </Card>
  );
}

export default ExpenseItem;