import { useState } from "react";
import TodoList from "./components/todoList";
import data from "./data";
import "./styles.css";

function App() {
  const [todoList, setTodoList] = useState(data);
  const addTodo = () => {
    let todo = {
      id: Math.random() * 10000 + 1,
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

  const filteredResults = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      setTodoList(
        data.filter((todo) => {
          return (
            todo.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
              -1 ||
            todo.description
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) !== -1
          );
        })
      );
    } else {
      setTodoList(data);
    }
  };

  return (
    <div className="App">
      <div className="input-container">
        <input type="text" style={{ flex: "80%" }} onChange={filteredResults} />
        <button style={{ flex: "10%" }} onClick={addTodo}>
          Add
        </button>
      </div>
      <TodoList todos={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
