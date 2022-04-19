import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
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
  const cancelHandler = () => {
    props.onHideNewExpense(false);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpense={saveExpenseHandler}
        onHideNewExpense={cancelHandler}
      />
    </div>
  );
};
export default NewExpense;
