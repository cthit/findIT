import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import styles from "./DarkModeSwitch.module.scss";

export interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: any;
}
const DarkModeSwitch = ({ darkMode, setDarkMode }: DarkModeProps) => (
  <div
    className={`${styles.darkModeHolder} ${
      darkMode ? null : styles.blackColor
    }`}
    onClick={() => {
      setDarkMode(!darkMode);
    }}>
    <div className={darkMode ? styles.slider_out : styles.slider_in}>
      {darkMode ? (
        <DarkModeIcon className={styles.darkModeSwitchStyle} />
      ) : (
        <LightModeIcon className={styles.darkModeSwitchStyle} />
      )}
    </div>
  </div>
);

export default DarkModeSwitch;
