import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpenses = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const newExpenseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpenseData);
    setShowExpenseFormHandler(false);
  };

  const setShowExpenseFormHandler = (show) => {
    setShowExpenseForm(show);
  };

  const onCancelHandler = () => {
    setShowExpenseFormHandler(false);
  };

  if (!showExpenseForm) {
    return (
      <div className="new-expense">
        <button onClick={() => setShowExpenseFormHandler(true)}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onNewExpenseData={newExpenseHandler}
        onCancel={onCancelHandler}
      />
    </div>
  );
};

export default NewExpenses;
