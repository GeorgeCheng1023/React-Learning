import "./AddExpenseButton.css";
const AddExpenseButton = (props) => {
  const showNewExpenseHandeler = () => {
    props.onShowNewExpense(true);
  };
  return (
    <div className="new-expense">
      <button
        type="button"
        className="new-expense__button"
        onClick={showNewExpenseHandeler}
      >
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpenseButton;
