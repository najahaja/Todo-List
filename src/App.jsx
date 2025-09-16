import { useState } from "react";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Add task
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    alert("Task Deleted!!");
  };

  // Toggle complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Start editing
  const startEdit = (task) => {
    setEditingTask(task);
  };

  // Update task
  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
    setEditingTask(null);
    alert("Updated Successfully");
  };

  return (
    <div className="app-container">
      <h1 className="app-title"> Todo List</h1>
      {editingTask ? (
        <EditTask task={editingTask} updateTask={updateTask} />
      ) : (
        <AddTask addTask={addTask} />
      )}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
