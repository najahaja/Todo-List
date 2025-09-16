import { useState } from "react";

function EditTask({ task, updateTask }) {
  const [text, setText] = useState(task.text);

  const handleUpdate = () => {
    if (text.trim() === "") return;
    updateTask(task.id, text);
  };

  return (
    <div className="edit-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="edit-input"
      />
      <button onClick={handleUpdate} className="update-btn">
        Update
      </button>
    </div>
  );
}

export default EditTask;
