import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
