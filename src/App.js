import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";
import NewExpense from "./components/NewExpense";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "Education",
      price: 7200,
      date: new Date(2022, 7, 5),
    },
    {
      id: 2,
      title: "Voyage",
      price: 2500,
      date: new Date(2023, 8, 8),
    },
    {
      id: 3,
      title: "New PC",
      price: 3200,
      date: new Date(2024, 10, 10),
    },
    {
      id: 4,
      title: "Food",
      price: 750,
      date: new Date(2024, 3, 3),
    },
  ];
  return (
    <div>
      <NewExpense />
      <ExpensesContainer expensesData={expensesData} />
    </div>
  );
}

export default App;
