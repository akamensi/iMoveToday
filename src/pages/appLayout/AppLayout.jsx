import { Map } from '../../components/map/Map';
import SideBar from '../../components/sideBar/SideBar'
import styles from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <div className={styles.app}>
    <SideBar/>  
    <Map/>  
    </div>
  )
}
