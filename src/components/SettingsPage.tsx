// import React, { useState, useEffect } from "react";
// import { BiUser, BiPalette } from "react-icons/bi";
// import styles from "./SettingsPage.module.css";
// import ProfileSettings from "./ProfileSettings";
// import AppearanceSettings from "./AppearanceSettings";

// const SettingsPage = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [theme, setTheme] = useState("light");

//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//   };

//   const handleThemeChange = (selectedTheme: string) => {
//     setTheme(selectedTheme);
//     document.documentElement.setAttribute("data-theme", selectedTheme);
//   };

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <div className={styles.settingsPage}>
//       <h1>Settings</h1>
//       <div className={styles.settingsContainer}>
//         <div className={styles.sidebar}>
//           <ul>
//             <li onClick={() => handleTabChange("profile")} className={activeTab === "profile" ? styles.active : ""}>
//               <BiUser /> Profile
//             </li>
//             <li onClick={() => handleTabChange("appearance")} className={activeTab === "appearance" ? styles.active : ""}>
//               <BiPalette /> Appearance
//             </li>
//           </ul>
//         </div>
//         <div className={styles.content}>
//           {activeTab === "profile" && <ProfileSettings />}
//           {activeTab === "appearance" && <AppearanceSettings onThemeChange={handleThemeChange} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;

import React, { useState, useEffect } from "react";
import { BiUser, BiPalette } from "react-icons/bi";
import styles from "./SettingsPage.module.css";
import ProfileSettings from "./ProfileSettings";
import AppearanceSettings from "./AppearanceSettings";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [theme, setTheme] = useState("light");
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const updateProfile = (newProfile: { name: string; email: string; phone: string; address: string }) => {
    setProfile(newProfile);
  };

  return (
    <div className={styles.settingsPage}>
      <h1>Settings</h1>
      <div className={styles.settingsContainer}>
        <div className={styles.sidebar}>
          <ul>
            <li
              onClick={() => handleTabChange("profile")}
              className={activeTab === "profile" ? styles.active : ""}
            >
              <BiUser /> Profile
            </li>
            <li
              onClick={() => handleTabChange("appearance")}
              className={activeTab === "appearance" ? styles.active : ""}
            >
              <BiPalette /> Appearance
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          {activeTab === "profile" && <ProfileSettings profile={profile} updateProfile={updateProfile} />}
          {activeTab === "appearance" && <AppearanceSettings onThemeChange={handleThemeChange} />}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

