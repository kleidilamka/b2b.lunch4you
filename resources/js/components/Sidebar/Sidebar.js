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
            <Link class={styles.removeUnderline} to="/ubersicht">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>Übersicht</h2>
                </div>
            </Link>
            {/* Second Row */}
            {!benutzerActive ? (
                <div
                    class={styles.menuItem}
                    onClick={() => setBenutzerActive(true)}
                >
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>Benutzer</h2>
                    <MdArrowForwardIos size={20} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setBenutzerActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2 class={styles.removeUnderline}>Benutzer</h2>
                        <MdOutlineKeyboardArrowDown size={20} />
                        <div></div>
                    </div>
                    <div class={styles.dropdownContainer}>
                        <div class={styles.empty} />
                        <div class={styles.dropdown}>
                            <Link
                                class={styles.removeUnderline}
                                to="/allebenutzer"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Alle Benutzer
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/benutzeranlegen"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Benutzer Anlegen
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/berechtingungen"
                            >
                                <h2 class={styles.removeUnderline}>Benutzer</h2>
                            </Link>
                        </div>
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
                    <h2 class={styles.removeUnderline}>Firmen Standorte</h2>
                    <MdArrowForwardIos size={20} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setFirmenActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2 class={styles.removeUnderline}>Firmen Standorte</h2>
                        <MdOutlineKeyboardArrowDown size={20} />
                        <div></div>
                    </div>
                    <div class={styles.dropdownContainer}>
                        <div class={styles.empty} />
                        <div class={styles.dropdown}>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmenstandorte"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmen Standorte
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmenverwalten"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmen Verwalten
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmendatenanzeigen"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmendaten Anzeigen
                                </h2>
                            </Link>

                            <Link
                                class={styles.removeUnderline}
                                to="/firmendatenbearbeiten"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmendaten Bearbeiten
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmendatenmitarbeiter"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmendaten Mitarbeiter
                                </h2>
                            </Link>
                        </div>
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
                    <h2 class={styles.removeUnderline}>Menüs verwalten</h2>
                    <MdArrowForwardIos size={20} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setMenusActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2 class={styles.removeUnderline}>Firmen Standorte</h2>
                        <MdOutlineKeyboardArrowDown size={20} />
                        <div></div>
                    </div>
                    <div class={styles.dropdownContainer}>
                        <div class={styles.empty} />
                        <div class={styles.dropdown}>
                            <Link
                                class={styles.removeUnderline}
                                to="/menusverwalten"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Menü Übersicht
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmenverwalten"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Menü neu anlegen{" "}
                                </h2>
                            </Link>
                        </div>
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
                    <h2 class={styles.removeUnderline}>Firmenzuschusse</h2>
                    <MdArrowForwardIos size={20} />
                </div>
            ) : (
                <div>
                    <div
                        class={styles.menuItem}
                        onClick={() => setFirmenzuschusseActive(false)}
                    >
                        <img src={SideBarIcon} class={styles.menuIcon} />
                        <h2 class={styles.removeUnderline}>Firmenzuschusse</h2>
                        <MdOutlineKeyboardArrowDown size={30} />
                    </div>

                    <div class={styles.dropdownContainer}>
                        <div class={styles.empty} />
                        <div class={styles.dropdown}>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmenzuschusse-verwalten"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmenzuschusse
                                </h2>
                            </Link>
                            <Link
                                class={styles.removeUnderline}
                                to="/firmenzuschusse-anlegen"
                            >
                                <h2 class={styles.removeUnderline}>
                                    Firmenzuschusse Anlegen{" "}
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <Link class={styles.removeUnderline} to="/bestellungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>
                        Bestellungen Verwalten
                    </h2>
                </div>
            </Link>
            <Link class={styles.removeUnderline} to="/rechnungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>Rechnungen Verwalten</h2>
                </div>
            </Link>
            <Link class={styles.removeUnderline} to="/zahlungenverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>Zahlungen Verwalten</h2>
                </div>
            </Link>
            <Link class={styles.removeUnderline} to="/lieferscheineverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>
                        Lieferscheine Verwalten
                    </h2>
                </div>
            </Link>
            <Link class={styles.removeUnderline} to="/bestellbonsverwalten">
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>
                        Bestellbons Verwalten
                    </h2>
                </div>
            </Link>
            <Link
                class={styles.removeUnderline}
                to="/benachrichtigungenverwalten"
            >
                <div class={styles.menuItem}>
                    <img src={SideBarIcon} class={styles.menuIcon} />
                    <h2 class={styles.removeUnderline}>
                        Benachrichtigungen Verwalten
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
