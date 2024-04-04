import { useState } from "react";

export const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const [expense, setExpense] = useState({
    name: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prev) => [...prev, expense]);
    setExpense({
      name: "",
      amount: 0,
    });
  };

  const totalExpense = () => {
    return expenses.reduce((acc, val) => {
      return acc + Number(val.amount);
    }, 0);
  };

  return (
    <div>
      <div className='container'>
        <h1>Expense Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter Name'
            value={expense.name}
            onChange={(e) =>
              setExpense((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <br />
          <br />
          <input
            type='number'
            placeholder='Enter Amount'
            value={expense.amount}
            onChange={(e) =>
              setExpense((prev) => ({ ...prev, amount: e.target.value }))
            }
          />

          <br />
          <br />
          <button type='submit'>Add Expense</button>
        </form>

        <table>
          <tr>
            {Object.keys(expense).map((key) => {
              return <th>{key.toUpperCase()}</th>;
            })}
          </tr>
          {expenses.map((exp) => {
            return (
              <tr>
                <td>{exp.name}</td>
                <td>{exp.amount}</td>
              </tr>
            );
          })}
        </table>
        <div>Total Expense: {totalExpense()}</div>
      </div>
    </div>
  );
};
