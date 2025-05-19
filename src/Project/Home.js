import React from "react";
import List from "./List";
import useFetch from "./useFetch";

function Home() {
  const { todo, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const retry = () => {
    window.location.reload();
  };

  return (
    <div className="Home">
        
      {loading && <div>Loading...</div>}

      {error && <div style={{color: 'red'}}> Error: {error}</div>}

      {Array.isArray(todo) && !loading && !error && todo.length === 0 && (
        <div>
          <p>No data available at the moment.</p>
          <button onClick={retry}>Retry</button>
        </div>
      )}

      {/* {todo && <List todo={todo} />} */}

      {Array.isArray(todo) && !loading && !error && (
        <List todo={todo.filter((item) => item.userId === 2)} />
      )}

    </div>
  );
}

export default Home;
