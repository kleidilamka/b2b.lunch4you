import React from "react";
import styles from "./BenachrichtigungenVerwalten.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import Sidebar from "../Sidebar";

const BenachrichtigungenVerwalten = () => {
    return (
        <div class={styles.main}>
            <Sidebar />
            <div class={styles.root}>
                <img src={Icon} class={styles.mainIcon} />
                <h2 class={styles.mainTitle}>BENACHRICHTIGUNGEN VERWALTEN</h2>
                <div class={styles.container}>
                    {/* First Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>BESTELLZEIT ENDE</h2>
                            <input
                                class={styles.input}
                                placeholder="Firma eingeben"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>BESTELLUNGEN AN KÜCHE SENDEN</h2>
                            <input
                                class={styles.input}
                                placeholder="Nachnamen eingeben"
                            />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>BESTELLUNGBESTÄTIGUNG VERSENDEN</h2>
                            <input
                                class={styles.input}
                                placeholder="00:00:00"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>BESTELLBON EMPFÄNGER</h2>
                            <input
                                class={styles.input}
                                placeholder="E-Mail eingeben"
                            />
                        </div>
                    </div>
                    {/* Third Row */}
                    <div class={styles.row}>
                        <div class={styles.column}>
                            <h2>LIEFERSCHEIN ERSTELLEN</h2>
                            <input
                                class={styles.input}
                                placeholder="00:00:00"
                            />
                        </div>
                        <div class={styles.column}>
                            <h2>BLIEFERSCHEIN EMPFÄNGER</h2>
                            <input
                                class={styles.input}
                                placeholder="E-Mail eingeben"
                            />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div class={styles.row}>
                        <div class={styles.column}></div>
                        <div class={styles.buttonsContainer}>
                            <button class={styles.backButton}>Abbrechen</button>
                            <button class={styles.forwardButton}>
                                Änderungen speichern
                            </button>
                        </div>
                        {/* Button  Row */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenachrichtigungenVerwalten;
