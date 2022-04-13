const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="date" max="100" min="0"></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
