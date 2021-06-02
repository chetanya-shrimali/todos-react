function Todo({ todo, deleteEvent }) {
  return (
    <div className="todo-container">
      <div style={{ flex: "90%" }}>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <div style={{ flex: "10%", alignSelf: "center" }}>
        <button
          className="close"
          aria-label="delete item"
          type="button"
          onClick={() => {
            deleteEvent(todo.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
