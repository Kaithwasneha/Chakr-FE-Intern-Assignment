
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
