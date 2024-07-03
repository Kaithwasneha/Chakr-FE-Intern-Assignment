// import React from "react";
// import { BiPalette } from "react-icons/bi";
// import styles from "./AppearanceSettings.module.css"; // Import your CSS file

// const AppearanceSettings = ({ onThemeChange }) => {
//   const handleThemeChange = (theme) => {
//     onThemeChange(theme); // Call the onThemeChange function passed as prop
//   };

//   return (
//     <div className={styles.appearanceSettings}>
//       <h2><BiPalette className={styles.icon} /> Appearance Settings</h2>
//       <ul>
//         <li onClick={() => handleThemeChange("light")} className={styles.themeOption}>Light Theme</li>
//         <li onClick={() => handleThemeChange("dark")} className={styles.themeOption}>Dark Theme</li>
//         <li onClick={() => handleThemeChange("purple-light")} className={styles.themeOption}>Purple Light Theme</li>
//         <li onClick={() => handleThemeChange("purple-dark")} className={styles.themeOption}>Purple Dark Theme</li>
//         {/* Add other theme options */}
//       </ul>
//     </div>
//   );
// };

// export default AppearanceSettings;

import React from "react";
import styles from "./AppearanceSettings.module.css"; // Import your CSS file

interface AppearanceSettingsProps {
  onThemeChange: (theme: string) => void; // Define the type of onThemeChange prop
}

const AppearanceSettings: React.FC<AppearanceSettingsProps> = ({ onThemeChange }) => {
  const handleThemeChange = (theme: string) => {
    onThemeChange(theme); // Call the onThemeChange function passed as prop
  };

  return (
    <div className={styles.appearanceSettings}>
      <h2>Appearance Settings</h2>
      <button onClick={() => handleThemeChange("dark")}>Switch to Dark Theme</button>
      <button onClick={() => handleThemeChange("light")}>Switch to Light Theme</button>
    </div>
  );
};

export default AppearanceSettings;
