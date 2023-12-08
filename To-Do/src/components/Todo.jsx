import React from "react";
import { useState } from "react";
import crossicon from "../../public/crossicon.png";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    if (value !== "") setTodo([...todo, value]);
    setValue("");
  };

  const deleteTodo = (key) => {
    let updateTodo = [...todo];
    updateTodo.splice(key, 1);
    setTodo([...updateTodo]);
  };

  const onValueChange = (e) => {
    setValue([e.target.value]);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="Heading">
          <h1>To-do</h1>
        </div>
        <div className="input">
          <form>
            <input
              type="text"
              placeholder="Enter Your todo..."
              value={value}
              onChange={onValueChange}
            />
            <button onClick={addTodo}>Add</button>
          </form>
          <div>
            {todo.map((todos, index) => {
              return (
                <>
                  <p key={index} index={index}>
                    {todos}
                  </p>
                  <img
                    src={crossicon}
                    width="20px"
                    alt="delet"
                    onClick={deleteTodo}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
