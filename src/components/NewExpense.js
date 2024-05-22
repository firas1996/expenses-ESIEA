import { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
  //   const [title, setTitle] = useState("");
  //   const [date, setDate] = useState("");
  //   const [price, setPrice] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  //   const titleChangeHandler =()=>{}
  //***************** solution 1 *****************************/
  //   const inputsChangeHandler = (event) => {
  //     setInputs({ ...inputs, [event.target.name]: event.target.value });
  //     setInputs((prevState)=>{return { ...prevState, [event.target.name]: event.target.value }})
  //   };
  //***************** solution 2 *****************************/
  const inputsChangeHandler = ({ target }) => {
    const { name, value } = target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              type="text"
              placeholder="Title"
              value={inputs.title}
              onChange={inputsChangeHandler}
              name="title"
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
              value={inputs.price}
              onChange={inputsChangeHandler}
              name="price"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              value={inputs.date}
              onChange={inputsChangeHandler}
              name="date"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
