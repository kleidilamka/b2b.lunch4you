import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import SideBarIcon from "../../assets/sidebarIcon.png";
import { Link } from "react-router-dom";
import { MdArrowForwardIos, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
    const [benutzerActive, setBenutzerActive] = useState(false);
    const [firmenActive, setFirmenActive] = useState(false);
    const [menusActive, setMenusActive] = useState(false);
    const [firmenzuschusseActive, setFirmenzuschusseActive] = useState(false);

    return (
        <div class={styles.sidebar}>
            {/* First Row */}
            <Link to="/ubersicht">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Übersicht</h2>
                </div>
            </Link>
            {/* Second Row */}
            {!benutzerActive ? (
                <div
                    class={styles.menuItem}
                    onClick={() => setBenutzerActive(true)}
                >
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Benutzer</h2>
                    <MdArrowForwardIos size={30} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setBenutzerActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2>Benutzer</h2>
                        <MdOutlineKeyboardArrowDown size={30} />
                        <div></div>
                    </div>
                    <div>
                        <Link to="/allebenutzer">
                            <h2>Alle Benutzer</h2>
                        </Link>
                        <Link to="/benutzeranlegen">
                            <h2>Benutzer Anlegen</h2>
                        </Link>
                        <Link to="/berechtingungen">
                            <h2>Benutzer</h2>
                        </Link>
                    </div>
                </div>
            )}
            {/* Third Row */}
            {!firmenActive ? (
                <div
                    class={styles.menuItem}
                    onClick={() => setFirmenActive(true)}
                >
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Firmen Standorte</h2>
                    <MdArrowForwardIos size={30} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setFirmenActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2>Firmen Standorte</h2>
                        <MdOutlineKeyboardArrowDown size={30} />
                        <div></div>
                    </div>
                    <div>
                        <Link to="/firmenstandorte">
                            <h2>Firmen Standorte</h2>
                        </Link>
                        <Link to="/firmenverwalten">
                            <h2>Firmen Verwalten</h2>
                        </Link>
                        <Link to="/firmendatenanzeigen">
                            <h2>Firmendaten Anzeigen</h2>
                        </Link>
                        <Link to="/firmendatenanzeigen">
                            <h2>Firmendaten Anzeigen</h2>
                        </Link>
                        <Link to="/firmendatenbearbeiten">
                            <h2>Firmendaten Bearbeiten</h2>
                        </Link>
                        <Link to="/firmendatenmitarbeiter">
                            <h2>Firmendaten Mitarbeiter</h2>
                        </Link>
                    </div>
                </div>
            )}
            {/* Third Row */}
            {!menusActive ? (
                <div
                    class={styles.menuItem}
                    onClick={() => setMenusActive(true)}
                >
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Menüs verwalten</h2>
                    <MdArrowForwardIos size={30} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setMenusActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2>Firmen Standorte</h2>
                        <MdOutlineKeyboardArrowDown size={30} />
                        <div></div>
                    </div>
                    <div>
                        <Link to="/menusverwalten">
                            <h2>Menü Übersicht</h2>
                        </Link>
                        <Link to="/firmenverwalten">
                            <h2>Menü neu anlegen </h2>
                        </Link>
                    </div>
                </div>
            )}
            {/* Fourth Row */}
            {!firmenzuschusseActive ? (
                <div
                    class={styles.menuItem}
                    onClick={() => setFirmenzuschusseActive(true)}
                >
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Firmenzuschusse verwalten</h2>
                    <MdArrowForwardIos size={30} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setFirmenzuschusseActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2>Firmenzuschusse Verwalten</h2>
                        <MdOutlineKeyboardArrowDown size={30} />
                        <div></div>
                    </div>
                    <div>
                        <Link to="/firmenzuschusse-verwalten">
                            <h2>Firmenzuschusse Verwalten</h2>
                        </Link>
                        <Link to="/firmenzuschusse-anlegen">
                            <h2>Firmenzuschusse Anlegen </h2>
                        </Link>
                    </div>
                </div>
            )}
            <Link to="/bestellungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Bestellungen Verwalten</h2>
                </div>
            </Link>
            <Link to="/rechnungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Rechnungen Verwalten</h2>
                </div>
            </Link>
            <Link to="/zahlungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Zahlungen Verwalten</h2>
                </div>
            </Link>
            <Link to="/lieferscheineverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Lieferscheine Verwalten</h2>
                </div>
            </Link>
            <Link to="/bestellbonsverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Bestellbons Verwalten</h2>
                </div>
            </Link>
            <Link to="/benachrichtigungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2>Benachrichtigungen Verwalten</h2>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
