import React from "react";
import styles from "./Dashboard.module.scss";
import SideBarIcon from "../../assets/sidebarIcon.png";
import Sidebar from "../../components/Sidebar";
import Ubersicht from "../../components/Ubersicht";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            {/* Sidebar */}
            <Sidebar />
            {/* Main Container */}
            <Ubersicht />
        </div>
    );
};

export default Dashboard;
