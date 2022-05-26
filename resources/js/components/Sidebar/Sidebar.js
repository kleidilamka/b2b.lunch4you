import React from "react";
import styles from "./Sidebar.module.scss";
import SideBarIcon from "../../assets/sidebarIcon.png";

const Sidebar = () => {
    return (
        <div class={styles.sidebar}>
            {Array.apply(null, { length: 13 }).map((e, i) => (
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Übersicht</h2>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
