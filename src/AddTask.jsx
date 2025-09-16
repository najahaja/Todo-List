import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="task-input"
      />
      <button onClick={handleAdd} className="add-btn">
        Add
      </button>
    </div>
  );
}

export default AddTask;
