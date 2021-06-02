import Todo from "./todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list-container">
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} deleteEvent={deleteTodo} />;
      })}
    </div>
  );
}

export default TodoList;
