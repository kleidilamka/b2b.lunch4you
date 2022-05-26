import React from "react";
import styles from "./Dashboard.module.scss";
import SideBarIcon from "../../assets/sidebarIcon.png";
import Sidebar from "../../components/Sidebar";
import Ubersicht from "../../components/Ubersicht";
import AlleBenutzer from "../../components/Benutzer/AlleBenutzer";
import BenutzerAnlegen from "../../components/Benutzer/BenutzerAnlegen";
import FirmenStandorte from "../../components/FirmenStandorte";
import FirmenVerwalten from "../../components/FirmenVerwalten";
import FirmendatenAnzeigen from "../../components/FirmendatenAnzeigen";
import FirmendatenBearbeiten from "../../components/FirmendatenBearbeiten";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            {/* Sidebar */}
            <Sidebar />
            {/* Main Container */}
            <FirmendatenBearbeiten />
        </div>
    );
};

export default Dashboard;
