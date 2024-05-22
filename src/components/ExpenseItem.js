import React, { useState } from "react";
import "./ExpenseItem.css";
let x = 0;
const ExpenseItem = ({ date, title, price }) => {
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const day = date.toLocaleString("fr-FR", { day: "2-digit" });
  const year = date.toLocaleString("fr-FR", { year: "numeric" });
  //   const year = date.getFullYear();
  // const [newTitle, setNewTitle] = useState(title);
  // const handelUpdate = () => {
  //   console.log(newTitle);
  //   setNewTitle(x++);
  // };
  // console.log(newTitle);
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={handelUpdate}>Update Title !!!!</button> */}
        <div className="expense-item__price"> € {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
