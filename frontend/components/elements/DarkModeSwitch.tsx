import styles from "./DarkModeSwitch.module.scss";

export interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: any;
}
const DarkModeSwitch = ({ darkMode, setDarkMode }: DarkModeProps) => (
  <div
    className={`${styles.darkModeHolder}`}
    onClick={() => {
      setDarkMode(!darkMode);
    }}>
    <div className={darkMode ? styles.slider_out : styles.slider_in} />
  </div>
);

export default DarkModeSwitch;
