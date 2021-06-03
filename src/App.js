import { useState } from "react";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
import data from "./data";
import "./styles.css";

function App() {
  const [todoList, setTodoList] = useState(data);
  const [toggleTodoForm, setToggleTodoForm] = useState(false);

  const addTodo = (title, description) => {
    let todo = {
      id: Math.random() * 10000 + 1,
      title,
      description
    };
    setTodoList([...todoList, todo]);
    setToggleTodoForm(false);
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
        <button
          style={{ flex: "10%" }}
          // className={"cursor " + (toggleTodoForm ? "green" : "black")}
          onClick={() => {
            setToggleTodoForm(!toggleTodoForm);
          }}
        >
          {toggleTodoForm ? "Go Back" : "Add"}
        </button>
      </div>
      {!toggleTodoForm ? (
        <TodoList todos={todoList} deleteTodo={deleteTodo} />
      ) : (
        <TodoForm addEvent={addTodo} />
      )}
    </div>
  );
}

export default App;
