

import React, { useState } from "react";
import { BiHome, BiUser, BiBuilding, BiCog, BiSearch, BiBell, BiTask } from "react-icons/bi";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  setPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    company: "Acme Inc.",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
  });

  return (
    <div className={styles.sidebar}>
     
      <div className={styles.profileInfo}>
        <h2>{profile.name}</h2>
        <p>{profile.company}</p>
        <p>{profile.email}</p>
        <p>{profile.contactNo}</p>
      </div>

      <ul>
        <li onClick={() => setPage("home")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiHome size={20} /> Home
        </li>
        <li onClick={() => setPage("People")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiUser size={20} /> People
        </li>
        <li onClick={() => setPage("companies")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiBuilding size={20} /> Companies
        </li>
        <li onClick={() => setPage("settings")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiCog size={20} /> Settings
        </li>
        <li onClick={() => setPage("search")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiSearch size={20} /> Search
        </li>
        <li onClick={() => setPage("notifications")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiBell size={20} /> Notifications
        </li>
        <li onClick={() => setPage("tasks")} className={`${styles.sidebarItem} cursor-pointer hover:bg-gray-300`}>
          <BiTask size={20} /> Tasks
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
