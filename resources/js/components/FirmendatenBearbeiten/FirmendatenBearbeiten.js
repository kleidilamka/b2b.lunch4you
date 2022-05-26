import React from "react";
import styles from "./FirmendatenBearbeiten.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

const FirmendatenBearbeiten = () => {
    return (
        <div class={styles.root}>
            <img src={Icon} class={styles.mainIcon} />
            <h2 class={styles.mainTitle}>BENUTZER NEU ANLEGEN</h2>
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
                        <h2>ANSPRECHPARTNER*</h2>
                        <div class={styles.inputContainer}>
                            <input
                                class={styles.input}
                                placeholder="Vornamen eingeben"
                                style={{ marginRight: 10 }}
                            />
                            <input
                                class={styles.input}
                                placeholder="Nachnamen eingeben"
                            />
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div class={styles.row}>
                    <div class={styles.column}>
                        <h2>E-MAIL*</h2>
                        <input
                            class={styles.input}
                            placeholder="E-Mail eingeben"
                        />
                    </div>
                    <div class={styles.column}>
                        <h2>TELEFONNUMMER*</h2>
                        <input
                            class={styles.input}
                            placeholder="Telefonnummer eingeben"
                        />
                    </div>
                </div>
                {/* Third Row */}
                <div class={styles.row}>
                    <div class={styles.column}>
                        <h2>PASSWORT*</h2>
                        <input
                            class={styles.input}
                            placeholder="Passwort eingeben"
                        />
                    </div>
                    <div class={styles.column}>
                        <h2>PASSWORT WIEDERHOLEN *</h2>
                        <input
                            class={styles.input}
                            placeholder="Passwort erneut eingeben"
                        />
                    </div>
                </div>
                <div class={styles.row}>
                    <div class={styles.column}>
                        <h2>PROFILBILD</h2>
                        <div class={styles.pictureContainer}>
                            <div class={styles.pictureLeftContainer}></div>
                            <div class={styles.pictureRightContainer}>
                                <button
                                    class={styles.button}
                                    style={{ backgroundColor: "yellowgreen" }}
                                >
                                    Upload
                                </button>
                                <button
                                    class={styles.button}
                                    style={{ backgroundColor: "#F89B1B" }}
                                >
                                    Löschen
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Button  Row */}
                    <div class={styles.buttonContainer}>
                        <button
                            onClick={() => setStep(1)}
                            class={styles.backButton}
                        >
                            Abbrechen
                        </button>
                        <button
                            onClick={() => setStep(3)}
                            class={styles.forwardButton}
                        >
                            Änderungen speichern
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirmendatenBearbeiten;
