

import React from "react";
import { BiUser, BiPalette } from "react-icons/bi";
import styles from "./SidebarSettings.module.css";

const SidebarSettings = () => {
  return (
    <div className={styles.sidebarSettings}>
      <ul>
        <li>
          <BiUser className={styles.icon} />
          Profile
        </li>
        <li>
          <BiPalette className={styles.icon} />
          Appearance
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};

export default SidebarSettings;
