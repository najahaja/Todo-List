function TaskItem({ task, deleteTask, toggleTask, startEdit }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        {/* Checkbox for mark as done / not done */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </div>

      <div className="task-actions">
        <button onClick={() => startEdit(task)} className="edit-icon">
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete-icon">
          Delete
        </button>
      
      </div>
    </li>
  );
}

export default TaskItem;
