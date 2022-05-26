import React from "react";
import styles from "./FirmenzuschusseAnlegen.module.scss";
import Icon from "../../assets/sidebarIcon.png";

const FirmenzuschusseAnlegen = () => {
    return (
        <div class={styles.root}>
            <img src={Icon} class={styles.mainIcon} />
            <h2 class={styles.mainTitle}>FIRMENZUSCHÜSSE ANLEGEN</h2>
            <div class={styles.container}>
                {/* First Row */}
                <div class={styles.row}>
                    <div class={styles.column}>
                        <h2>FIRMENNAME*</h2>
                        <input
                            class={styles.input}
                            placeholder="Firma eingeben"
                        />
                    </div>
                    <div class={styles.column}>
                        <h2>STANDORT AUSWÄHLEN*</h2>
                        <input
                            class={styles.input}
                            placeholder="Nachnamen eingeben"
                        />
                    </div>
                </div>
                {/* Second Row */}
                <div class={styles.row}>
                    <div class={styles.column}>
                        <h2>FIRMENZUSCHUSS €*</h2>
                        <input class={styles.input} placeholder="0,00" />
                    </div>
                    <div class={styles.buttonsContainer}>
                        <button class={styles.backButton}>Abbrechen</button>
                        <button class={styles.forwardButton}>Speichern</button>
                    </div>
                    {/* Button  Row */}
                </div>
            </div>
        </div>
    );
};

export default FirmenzuschusseAnlegen;
