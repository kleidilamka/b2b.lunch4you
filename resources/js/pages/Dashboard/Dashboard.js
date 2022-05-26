import React from "react";
import styles from "./Dashboard.module.scss";
import SideBarIcon from "../../assets/sidebarIcon.png";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (
        <div class={styles.root}>
            {/* Sidebar */}
            <Sidebar />
            {/* Main Container */}
            <div class={styles.wrapper}>
                <div class={styles.container}>
                    <h2
                        style={{
                            position: "absolute",
                            left: 20,
                            top: 10,
                            fontSize: 36,
                        }}
                    >
                        DASHBOARD PANEL ÜBERSICHT
                    </h2>
                    <div class={styles.mainContainer}>
                        <img
                            src={SideBarIcon}
                            class={styles.infoIcon}
                            style={{
                                position: "absolute",
                                top: -30,
                                left: 30,
                            }}
                        />
                        <h2
                            style={{
                                position: "absolute",
                                top: 20,
                                left: 150,
                            }}
                        >
                            BESTELL ÜBERSICHT
                        </h2>
                        <div class={styles.topContainer}>
                            {/* Info Container */}
                            <div class={styles.infoContainer}>
                                <div class={styles.infoTopContainer}>
                                    <h2 class={styles.infoTitle}>
                                        TAGES BESTELLUNGEN
                                    </h2>
                                </div>
                                <div class={styles.infoTopBottomContainer}>
                                    <div class={styles.row}>
                                        <h2>Gesamt:</h2>
                                        <h2>69</h2>
                                    </div>
                                    <div class={styles.row}>
                                        <h2>Gesamt:</h2>
                                        <h2>69</h2>
                                    </div>
                                    <div class={styles.row}>
                                        <h2>Gesamt:</h2>
                                        <h2>69</h2>
                                    </div>
                                </div>
                            </div>
                            {/* Info Container 2*/}
                            <div class={styles.infoContainer}>
                                <div class={styles.infoTopContainer}>
                                    <h2 class={styles.infoTitle}>
                                        WOCHEN BESTELLUNGEN{" "}
                                    </h2>
                                </div>
                                <div class={styles.infoTopBottomContainer}>
                                    <div class={styles.row}>
                                        <h2>Gesamt:</h2>
                                        <h2>69</h2>
                                    </div>
                                    <div class={styles.row}>
                                        <h2>Gesamt:</h2>
                                        <h2>69</h2>
                                    </div>
                                    <div class={styles.row}>
                                        <h2>Gesamt:</h2>
                                        <h2>69</h2>
                                    </div>
                                </div>
                            </div>
                            {/* Info Container 3*/}
                            <div class={styles.infoContainer}>
                                <div class={styles.infoTopContainer}>
                                    <h2 class={styles.infoTitle}>
                                        WOCHEN BESTELLUNGEN{" "}
                                    </h2>
                                </div>
                                <div class={styles.infoTopBottomContainer}>
                                    <h1
                                        style={{
                                            fontSize: 84,
                                            color: "yellowgreen",
                                        }}
                                    >
                                        217
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* Middle Container */}
                        <div class={styles.middleContainer}>
                            {/* Info Container */}
                            <div class={styles.infoMiddleContainerOne}>
                                <h2
                                    class={styles.yellowGreen}
                                    style={{
                                        fontSize: 48,
                                        alignSelf: "center",
                                        justifySelf: "center",
                                    }}
                                >
                                    57%
                                </h2>
                                <h2 style={{ position: "absolute", bottom: 5 }}>
                                    TAGES TO DO
                                </h2>
                            </div>
                            {/* Info Container 2*/}
                            <div class={styles.infoMiddleContainer}></div>
                            {/* Info Container 3*/}
                            <div class={styles.infoMiddleContainer}>
                                <h2 class={styles.yellowGreen}>
                                    GESAMT UMSATZ
                                </h2>
                                <h2
                                    class={styles.yellowGreen}
                                    style={{ fontSize: 48 }}
                                >
                                    € 1.489,25
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class={styles.infoBottomContainer}>
                        <div class={styles.infoBottom}>
                            <img
                                src={SideBarIcon}
                                class={styles.infoBottomIcon}
                            />
                            <h2
                                style={{
                                    position: "absolute",
                                    top: 20,
                                    left: 150,
                                }}
                            >
                                ZAHLUNGEN <br />
                                AUSSTEHEND
                            </h2>
                            <h1 style={{ fontSize: 48, color: "teal" }}>
                                17x (€ 763,12)
                            </h1>
                        </div>
                        <div class={styles.infoBottom}>
                            <img
                                src={SideBarIcon}
                                class={styles.infoBottomIcon}
                            />
                            <h2
                                style={{
                                    position: "absolute",
                                    top: 20,
                                    left: 150,
                                }}
                            >
                                RECHNUNGEN <br />
                                AUSSTEHEND
                            </h2>
                            <h1 style={{ fontSize: 48, color: "teal" }}>
                                29x (€ 1.153,48)
                            </h1>
                        </div>
                    </div>
                </div>
                {/* Filter Container */}
                <div class={styles.filterWrapper}>
                    <div class={styles.filterContainer}>
                        <div class={styles.filterRow}>
                            <h4 class={styles.filterTitle}>
                                FILTER <br />
                                BESTELLUNGEN
                            </h4>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Heute </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Diese Woche </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Diese Monat </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Alle </label>
                            </div>
                        </div>{" "}
                        <div class={styles.filterRow}>
                            <h4 class={styles.filterTitle}>
                                FILTER <br />
                                RECHNUNGEN
                            </h4>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Heute </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Diese Woche </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Diese Monat </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Alle </label>
                            </div>
                        </div>{" "}
                        <div class={styles.filterRow}>
                            <h4 class={styles.filterTitle}>
                                FILTER <br />
                                ZAHLUNGEN
                            </h4>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Heute </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Diese Woche </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Diese Monat </label>
                            </div>
                            <div class={styles.inputContainer}>
                                <input type="checkbox" />
                                <label class={styles.label}>Alle </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
