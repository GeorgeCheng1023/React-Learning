import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const saveExpense = {
      ...expense,
      id: Math.round(Math.random() * 10000000000000).toString(),
    };
    console.log(saveExpense);
    props.onAddNewExpense(saveExpense);
    return saveExpense;
  };

  const [displayExpenseForm, setDisplayExpenseForm] = useState(false);
  const showExpenseFormHandler = () => {
    setDisplayExpenseForm(true);
  };
  const cancelHandler = () => {
    setDisplayExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {displayExpenseForm ? (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={showExpenseFormHandler}>Add Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
