

// import React, { useState } from "react";
// import styles from "./PeoplePage.module.css";

// const PeoplePage = () => {
//   const [prospects, setProspects] = useState([
//     { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", company: "Acme Inc.", tasks: [] },
//     { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", company: "Tech Solutions", tasks: [] },
//   ]);

//   const [newProspect, setNewProspect] = useState({ name: "", email: "", phone: "", company: "" });
//   const [newTask, setNewTask] = useState({ title: "", description: "", prospectId: null });

//   const handleAddProspect = (e) => {
//     e.preventDefault();
//     setProspects([...prospects, { ...newProspect, id: Date.now(), tasks: [] }]);
//     setNewProspect({ name: "", email: "", phone: "", company: "" });
//   };

//   const handleDeleteProspect = (id) => {
//     setProspects(prospects.filter((prospect) => prospect.id !== id));
//   };

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     setProspects(
//       prospects.map((prospect) => {
//         if (prospect.id === newTask.prospectId) {
//           return { ...prospect, tasks: [...prospect.tasks, { ...newTask, id: Date.now() }] };
//         }
//         return prospect;
//       })
//     );
//     setNewTask({ title: "", description: "", prospectId: null });
//   };

//   return (
//     <div>
//       <h1>People Page - Prospects</h1>
//       <form className={styles.addProspectForm} onSubmit={handleAddProspect}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newProspect.name}
//           onChange={(e) => setNewProspect({ ...newProspect, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newProspect.email}
//           onChange={(e) => setNewProspect({ ...newProspect, email: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={newProspect.phone}
//           onChange={(e) => setNewProspect({ ...newProspect, phone: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Company"
//           value={newProspect.company}
//           onChange={(e) => setNewProspect({ ...newProspect, company: e.target.value })}
//           required
//         />
//         <button type="submit">Add Prospect</button>
//       </form>

//       <div className={styles.tableContainer}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Company</th>
//               <th>Actions</th>
//               <th>Tasks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {prospects.map((prospect) => (
//               <tr key={prospect.id}>
//                 <td>{prospect.name}</td>
//                 <td>{prospect.email}</td>
//                 <td>{prospect.phone}</td>
//                 <td>{prospect.company}</td>
//                 <td className={styles.actions}>
//                   <button className={styles.edit}>Edit</button>
//                   <button className={styles.delete} onClick={() => handleDeleteProspect(prospect.id)}>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   <ul>
//                     {prospect.tasks.map((task) => (
//                       <li key={task.id}>{task.title}: {task.description}</li>
//                     ))}
//                   </ul>
//                   <form className={styles.addTaskForm} onSubmit={handleAddTask}>
//                     <input
//                       type="text"
//                       placeholder="Task Title"
//                       value={newTask.title}
//                       onChange={(e) => setNewTask({ ...newTask, title: e.target.value, prospectId: prospect.id })}
//                       required
//                     />
//                     <input
//                       type="text"
//                       placeholder="Task Description"
//                       value={newTask.description}
//                       onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//                       required
//                     />
//                     <button type="submit">Add Task</button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PeoplePage;


import React, { useState } from "react";
import styles from "./PeoplePage.module.css";

interface Prospect {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  tasks: {
    id: number;
    title: string;
    description: string;
    prospectId: number | null; // Adjusted prospectId type to be number or null
  }[];
}

const PeoplePage = () => {
  const [prospects, setProspects] = useState<Prospect[]>([
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", company: "Acme Inc.", tasks: [] },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", company: "Tech Solutions", tasks: [] },
  ]);

  const [newProspect, setNewProspect] = useState({ name: "", email: "", phone: "", company: "" });
  const [newTask, setNewTask] = useState({ title: "", description: "", prospectId: null as number | null });

  const handleAddProspect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProspects([...prospects, { ...newProspect, id: Date.now(), tasks: [] }]);
    setNewProspect({ name: "", email: "", phone: "", company: "" });
  };

  const handleDeleteProspect = (id: number) => {
    setProspects(prospects.filter((prospect) => prospect.id !== id));
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProspects(
      prospects.map((prospect) => {
        if (prospect.id === newTask.prospectId) {
          return { ...prospect, tasks: [...prospect.tasks, { ...newTask, id: Date.now() }] };
        }
        return prospect;
      })
    );
    setNewTask({ title: "", description: "", prospectId: null });
  };

  return (
    <div>
      <h1>People Page - Prospects</h1>
      <form className={styles.addProspectForm} onSubmit={handleAddProspect}>
        <input
          type="text"
          placeholder="Name"
          value={newProspect.name}
          onChange={(e) => setNewProspect({ ...newProspect, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newProspect.email}
          onChange={(e) => setNewProspect({ ...newProspect, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={newProspect.phone}
          onChange={(e) => setNewProspect({ ...newProspect, phone: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={newProspect.company}
          onChange={(e) => setNewProspect({ ...newProspect, company: e.target.value })}
          required
        />
        <button type="submit">Add Prospect</button>
      </form>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Actions</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {prospects.map((prospect) => (
              <tr key={prospect.id}>
                <td>{prospect.name}</td>
                <td>{prospect.email}</td>
                <td>{prospect.phone}</td>
                <td>{prospect.company}</td>
                <td className={styles.actions}>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete} onClick={() => handleDeleteProspect(prospect.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <ul>
                    {prospect.tasks.map((task) => (
                      <li key={task.id}>{task.title}: {task.description}</li>
                    ))}
                  </ul>
                  <form className={styles.addTaskForm} onSubmit={handleAddTask}>
                    <input
                      type="text"
                      placeholder="Task Title"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value, prospectId: prospect.id })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Task Description"
                      value={newTask.description}
                      onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                      required
                    />
                    <button type="submit">Add Task</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeoplePage;
