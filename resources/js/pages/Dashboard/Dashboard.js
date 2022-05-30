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
import FirmendatenMitarbeiter from "../../components/FirmendatenMitarbeiter";
import MenusVerwalten from "../../components/MenusVerwalten";
import FirmenzuschusseVerwalten from "../../components/FirmenzuschusseVerwalten";
import FirmenzuschusseAnlegen from "../../components/FirmenzuschusseAnlegen";
import BestellungenVerwalten from "../../components/BestellungenVerwalten";
import RechnungenVerwalten from "../../components/RechnungenVerwalten/RechnungenVerwalten";
import ZahlungenVerwalten from "../../components/ZahlungenVerwalten";
import LieferscheineVerwalten from "../../components/LieferscheineVerwalten";
import BestellbonsVerwalten from "../../components/BestellbonsVerwalten";
import BenachrichtigungenVerwalten from "../../components/BenachrichtigungenVerwalten";
import Test from "../Test";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            {/* Sidebar */}
            <Sidebar />
        </div>
    );
};

export default Dashboard;
