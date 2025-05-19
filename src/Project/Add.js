import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState();
  const [todo, setTodo] = useState();
  const [completed, setCompleted] = useState(false);

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const back = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    setLoad(true);

    const newTodo = {
      userId: name,
      title: todo,
      completed: completed,
    };

    setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newTodo),
        })
          .then((res) => {
            if (!res.ok) {
              throw Error("Adding New To-do failed, try again later");
            }
            console.log('submitted')
            back("/");
            setLoad(false);
          })
          .catch((err) => {
            setError(err.message);
            setError(false);
          });
    }, 2000)
  };

  return (
    <div className="NewBlog">
      <form>
        <input
          type="text"
          placeholder="Add Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add to-do"
          onChange={(e) => setTodo(e.target.value)}
        />
        <label style={{ display: "flex", alignItems: "center", gap: "1vh" }}>
          <input
            type="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
            checked={completed}
          />
          completed
        </label>

        {!load && <button onClick={submit}>Add To-do</button>}
        {load && <button>Loading...</button>}
      </form>

      {error && <div>{error}</div>}
    </div>
  );
}

export default Add;
