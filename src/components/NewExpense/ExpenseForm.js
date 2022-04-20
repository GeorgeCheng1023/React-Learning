import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const cancelHandler = () => {
    props.onCancel();
  };

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: userInput.enteredName,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpense(expenseData);
    setUserInput((prevState) => {
      return {
        menteredName: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            value={userInput.enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            max="100"
            min="0"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            max="2023-12-31"
            min="2021-1-1"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler} type="button">
          Cancel
        </button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
