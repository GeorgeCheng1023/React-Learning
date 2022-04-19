import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.expenses.length == 0) {
    return <h2 className="expenses-list__fallback">Not found Item</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
