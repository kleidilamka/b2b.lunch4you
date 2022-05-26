import React from "react";
import styles from "./BenutzerAnlegen.module.scss";
import Icon from "../../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

const BenutzerAnlegen = () => {
    return (
        <div class={styles.root}>
            <img src={Icon} class={styles.mainIcon} />
            <h2 class={styles.mainTitle}>BENUTZER NEU ANLEGEN</h2>
            <div class={styles.container}>
                {/* First Row */}
                <div class={styles.row}>
                    <div class={styles.column}>
                        <h2>VORNAME*</h2>
                        <input
                            class={styles.input}
                            placeholder="Vornamen eingeben"
                        />
                    </div>
                    <div class={styles.column}>
                        <h2>NACHNAME*</h2>
                        <input
                            class={styles.input}
                            placeholder="Nachnamen eingeben"
                        />
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
                    <div class={styles.column}>
                        <h2>PROFILBILD</h2>
                        <div class={styles.pictureContainer}>
                            <select
                                class={styles.dropdown}
                                name="cars"
                                id="cars"
                            >
                                <option class={styles.option} value="volvo">
                                    Volvo
                                </option>
                                <option class={styles.option} value="saab">
                                    Saab
                                </option>
                                <option class={styles.option} value="mercedes">
                                    Mercedes
                                </option>
                                <option class={styles.option} value="audi">
                                    Audi
                                </option>
                            </select>
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
                        <AiOutlinePlusCircle size={30} /> Benutzer anlegen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BenutzerAnlegen;
