import { Outlet } from "react-router-dom";
import AppNav from "../appNav/AppNav";
import { Logo } from "../logo/Logo";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>

      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright} >&copy; Copyright {new Date().getFullYear()} by iMove Today Inc.</p>
      </footer>
    </div>
  );
}

export default SideBar;