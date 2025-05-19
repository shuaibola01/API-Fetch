import React, { useState, useEffect } from "react";
import '../App.css';

function List({ todo }) {
  const [todos, setTodos] = useState([]);

  // Initialize local state when the todo prop changes
  useEffect(() => {
    setTodos(todo);

  }, [todo]);

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((item) => (
        <div className="List" key={item.id}>
          <ul>
            <li>
              {item.userId}
              <p style={{color: 'orange', fontWeight: '900'}}>{item.title}</p>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                Completed
              </label>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default List;
