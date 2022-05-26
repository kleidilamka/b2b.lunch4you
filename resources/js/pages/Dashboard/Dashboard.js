import React from "react";
import styles from "./Dashboard.module.scss";
import SideBarIcon from "../../assets/sidebarIcon.png";
import Sidebar from "../../components/Sidebar";
import Ubersicht from "../../components/Ubersicht";
import AlleBenutzer from "../../components/Benutzer/AlleBenutzer";
import BenutzerAnlegen from "../../components/Benutzer/BenutzerAnlegen";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            {/* Sidebar */}
            <Sidebar />
            {/* Main Container */}
            <BenutzerAnlegen />
        </div>
    );
};

export default Dashboard;
