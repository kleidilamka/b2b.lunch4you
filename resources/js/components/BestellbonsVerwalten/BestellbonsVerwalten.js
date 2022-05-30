import React from "react";
import styles from "./BestellbonsVerwalten.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import Sidebar from "../Sidebar";

const BestellbonsVerwalten = () => {
    return (
        <div class={styles.main}>
            <Sidebar />
            <div class={styles.root}>
                <img src={Icon} class={styles.mainIcon} />
                <h2 class={styles.mainTitle}>BESTELLBONS VERWALTEN</h2>
                <div class={styles.container}>
                    {/* Top Container */}
                    <div class={styles.topContainer}>
                        <div class={styles.topLeftContainer}>
                            <h2
                                style={{
                                    position: "absolute",
                                    top: 20,
                                    left: 20,
                                }}
                            >
                                BESTELLBONS FILTERN
                            </h2>
                            <div class={styles.inputContainer}>
                                <input
                                    placeholder="Rechnungsnummer auswählen"
                                    class={styles.input}
                                    type="text"
                                />
                                <input
                                    placeholder="Firma auswählen"
                                    class={styles.input}
                                    type="text"
                                />
                                <button class={styles.searchButton}>
                                    Suchen
                                </button>
                            </div>
                        </div>
                        <div class={styles.topRightContainer}>
                            <h2 class={styles.buttonText}>
                                OFFENE
                                <br />
                                ZAHLUNGEN
                            </h2>
                            <RiMoneyEuroCircleLine size={100} color={"#fff"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestellbonsVerwalten;
