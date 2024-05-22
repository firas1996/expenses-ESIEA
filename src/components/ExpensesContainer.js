import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import Chart from "./Chart/Chart";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
      <Chart expensesData={expensesData} />
      {expensesData.map((item) => {
        return (
          <ExpenseItem title={item.title} price={item.price} date={item.date} />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
