import React, { useState } from "react";
import styles from "./Tasks.module.css";

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Follow up", description: "Follow up with John Doe", assignedTo: "John Doe" },
    { id: 2, title: "Send proposal", description: "Send proposal to Jane Smith", assignedTo: "Jane Smith" },
  ]);

  const [newTask, setNewTask] = useState({ title: "", description: "", assignedTo: "" });
  const [prospects, setProspects] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", description: "", assignedTo: "" });
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddProspect = (e: React.FormEvent) => {
    e.preventDefault();
    const newProspect = { id: Date.now(), name: newTask.assignedTo };
    setProspects([...prospects, newProspect]);
  };

  return (
    <div className={styles.tasksPage}>
      <h1>Tasks</h1>
      <form onSubmit={handleAddTask} className={styles.addTaskForm}>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <select
          value={newTask.assignedTo}
          onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
          required
        >
          <option value="">Assign to...</option>
          {prospects.map((prospect) => (
            <option key={prospect.id} value={prospect.name}>
              {prospect.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Assigned to: {task.assignedTo}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleAddProspect} className={styles.addProspectForm}>
        <input
          type="text"
          placeholder="New Prospect Name"
          value={newTask.assignedTo}
          onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
          required
        />
        <button type="submit">Add Prospect</button>
      </form>
    </div>
  );
};

export default TasksPage;