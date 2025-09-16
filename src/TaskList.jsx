import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, startEdit }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          startEdit={startEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
