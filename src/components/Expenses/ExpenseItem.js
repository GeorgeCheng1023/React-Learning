import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">{props.amount}'s</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
