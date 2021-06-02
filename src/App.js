import { useState } from "react";
import TodoList from "./components/todoList";
import data from "./data";
import "./styles.css";

function App() {
  const [todoList, setTodoList] = useState(data);
  const addTodo = () => {
    let todo = {
      title: "newTitle",
      description: "new description"
    };
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <div className="input-container">
        <input type="text" style={{ flex: "80%" }} />
        <button style={{ flex: "10%" }} onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList todos={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
