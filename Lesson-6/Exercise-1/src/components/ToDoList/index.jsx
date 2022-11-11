import React, { useEffect, useState } from "react";
import "./index.css";

const TodoList = () => {

  const [items, setItems] = useState([
    "Hit the gym",
    "Meet George",
    "Buy eggs",
    "Read a book",
    "Organize office",
  ]);



  const [input, setInput] = useState("");
  const [newItems, setNewItems] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const addItems = () => {
    setItems([...items, input]);
    setNewItems([...newItems, input]);
    setInput("");
  };

  useEffect(() => {
      const itemLocal = JSON.parse(localStorage.getItem("items"));
      setItems([...items, ...itemLocal]); 
  }, []);


  useEffect(() => {
    if (newItems) {
      localStorage.setItem("items", JSON.stringify([...newItems, input]));
    }
  }, [newItems]);


  
  const deleteItems = (deleteIndex) => {
    // items.splice(index, 1);
    // setItems([...items]);
    const newList = items.filter((item, index) => index !== deleteIndex);
    console.log(newList);
    setItems([...newList]);
  };


  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={input}
          onChange={handleInput}
        />
        <span onClick={addItems} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        {items.map((value, index) => {
          return (
            <li className="list-item" key={index}>
              <span>{value}</span>
              <button onClick={() => deleteItems(index)}>x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
