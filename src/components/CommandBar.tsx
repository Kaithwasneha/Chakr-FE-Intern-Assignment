// // src/components/CommandBar.tsx

// // import React, { useState, useEffect } from "react";
// // import { BiSearch, BiPlus, BiArrowToRight, BiUser, BiBuilding, BiListCheck } from "react-icons/bi";
// // import styles from "./CommandBar.module.css";

// // const CommandBar = ({ setPage }) => {
// //   const [query, setQuery] = useState("");
// //   const [visible, setVisible] = useState(false);

// //   const handleKeyDown = (event) => {
// //     if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
// //       event.preventDefault();
// //       setVisible(!visible);
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener("keydown", handleKeyDown);
// //     return () => {
// //       document.removeEventListener("keydown", handleKeyDown);
// //     };
// //   }, [visible]);

// //   const handleSelect = (page) => {
// //     setPage(page);
// //     setVisible(false);
// //   };

// //   return (
// //     visible && (
// //       <div className={styles.commandBar}>
// //         <input
// //           type="text"
// //           placeholder="Type a command or search..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           autoFocus
// //         />
// //         <ul>
// //           <li onClick={() => handleSelect("home")}><BiArrowToRight /> Home</li>
// //           <li onClick={() => handleSelect("prospects")}><BiUser /> People</li>
// //           <li onClick={() => handleSelect("companies")}><BiBuilding /> Companies</li>
// //           <li onClick={() => handleSelect("settings")}><BiListCheck /> Settings</li>
// //           <li onClick={() => handleSelect("search")}><BiSearch /> Search</li>
// //           <li onClick={() => handleSelect("notifications")}><BiArrowToRight /> Notifications</li>
// //           <li onClick={() => handleSelect("tasks")}><BiListCheck /> Tasks</li>
// //           <li className={styles.sectionHeader}>CREATE</li>
// //           <li onClick={() => handleSelect("create_task")}><BiPlus /> Create Task</li>
// //           <li className={styles.sectionHeader}>NAVIGATE</li>
// //           <li onClick={() => handleSelect("prospects")}><BiArrowToRight /> Go to People</li>
// //           <li onClick={() => handleSelect("companies")}><BiArrowToRight /> Go to Companies</li>
// //           <li onClick={() => handleSelect("opportunities")}><BiArrowToRight /> Go to Opportunities</li>
// //           <li onClick={() => handleSelect("settings")}><BiArrowToRight /> Go to Settings</li>
// //           <li onClick={() => handleSelect("tasks")}><BiArrowToRight /> Go to Tasks</li>
// //           <li className={styles.sectionHeader}>PEOPLE</li>
// //           <li onClick={() => handleSelect("brandi_dodson")}><BiUser /> B Brandi Dodson</li>
// //         </ul>
// //       </div>
// //     )
// //   );
// // };

// // export default CommandBar;

// import React, { useState, useEffect } from "react";
// import { BiSearch, BiPlus, BiArrowToRight, BiUser, BiBuilding, BiListCheck } from "react-icons/bi";
// import styles from "./CommandBar.module.css";

// interface CommandBarProps {
//   setPage: (page: string) => void;
// }

// const CommandBar: React.FC<CommandBarProps> = ({ setPage }) => {
//   const [query, setQuery] = useState("");
//   const [visible, setVisible] = useState(false);

//   const handleKeyDown = (event: KeyboardEvent) => {
//     if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
//       event.preventDefault();
//       setVisible(!visible);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [visible]);

//   const handleSelect = (page: string) => {
//     setPage(page);
//     setVisible(false);
//   };

//   return (
//     visible && (
//       <div className={styles.commandBar}>
//         <input
//           type="text"
//           placeholder="Type a command or search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           autoFocus
//         />
//         <ul>
//           <li onClick={() => handleSelect("home")}><BiArrowToRight /> Home</li>
//           <li onClick={() => handleSelect("prospects")}><BiUser /> People</li>
//           <li onClick={() => handleSelect("companies")}><BiBuilding /> Companies</li>
//           <li onClick={() => handleSelect("settings")}><BiListCheck /> Settings</li>
//           <li onClick={() => handleSelect("search")}><BiSearch /> Search</li>
//           <li onClick={() => handleSelect("notifications")}><BiArrowToRight /> Notifications</li>
//           <li onClick={() => handleSelect("tasks")}><BiListCheck /> Tasks</li>
//           <li className={styles.sectionHeader}>CREATE</li>
//           <li onClick={() => handleSelect("create_task")}><BiPlus /> Create Task</li>
//           <li className={styles.sectionHeader}>NAVIGATE</li>
//           <li onClick={() => handleSelect("prospects")}><BiArrowToRight /> Go to People</li>
//           <li onClick={() => handleSelect("companies")}><BiArrowToRight /> Go to Companies</li>
//           <li onClick={() => handleSelect("opportunities")}><BiArrowToRight /> Go to Opportunities</li>
//           <li onClick={() => handleSelect("settings")}><BiArrowToRight /> Go to Settings</li>
//           <li onClick={() => handleSelect("tasks")}><BiArrowToRight /> Go to Tasks</li>
//           <li className={styles.sectionHeader}>PEOPLE</li>
//           <li onClick={() => handleSelect("brandi_dodson")}><BiUser /> B Brandi Dodson</li>
//         </ul>
//       </div>
//     )
//   );
// };

// export default CommandBar;
import React, { useState, useEffect, useCallback } from "react";
import { BiSearch, BiPlus, BiArrowToRight, BiUser, BiBuilding, BiListCheck } from "react-icons/bi";
import styles from "./CommandBar.module.css";

interface CommandBarProps {
  setPage: (page: string) => void;
}

const CommandBar: React.FC<CommandBarProps> = ({ setPage }) => {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      setVisible((prevVisible) => !prevVisible);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleSelect = (page: string) => {
    setPage(page);
    setVisible(false);
  };

  return (
    visible && (
      <div className={styles.commandBar}>
        <input
          type="text"
          placeholder="Type a command or search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <ul>
          <li onClick={() => handleSelect("home")}><BiArrowToRight /> Home</li>
          <li onClick={() => handleSelect("prospects")}><BiUser /> People</li>
          <li onClick={() => handleSelect("companies")}><BiBuilding /> Companies</li>
          <li onClick={() => handleSelect("settings")}><BiListCheck /> Settings</li>
          <li onClick={() => handleSelect("search")}><BiSearch /> Search</li>
          <li onClick={() => handleSelect("notifications")}><BiArrowToRight /> Notifications</li>
          <li onClick={() => handleSelect("tasks")}><BiListCheck /> Tasks</li>
          <li className={styles.sectionHeader}>CREATE</li>
          <li onClick={() => handleSelect("create_task")}><BiPlus /> Create Task</li>
          <li className={styles.sectionHeader}>NAVIGATE</li>
          <li onClick={() => handleSelect("prospects")}><BiArrowToRight /> Go to People</li>
          <li onClick={() => handleSelect("companies")}><BiArrowToRight /> Go to Companies</li>
          <li onClick={() => handleSelect("opportunities")}><BiArrowToRight /> Go to Opportunities</li>
          <li onClick={() => handleSelect("settings")}><BiArrowToRight /> Go to Settings</li>
          <li onClick={() => handleSelect("tasks")}><BiArrowToRight /> Go to Tasks</li>
          <li className={styles.sectionHeader}>PEOPLE</li>
          <li onClick={() => handleSelect("brandi_dodson")}><BiUser /> B Brandi Dodson</li>
        </ul>
      </div>
    )
  );
};

export default CommandBar;
