import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpenses = ({ onAddExpense }) => {
  const newExpenseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseData={newExpenseHandler} />
    </div>
  );
};

export default NewExpenses;
