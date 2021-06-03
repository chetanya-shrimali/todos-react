import { useState } from "react";

function TodoForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addEvent(title, description);
    } else {
      alert("Please enter title");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
