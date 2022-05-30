import React, { useState } from "react";
import styles from "./BenutzerAnlegen.module.scss";
import Icon from "../../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sidebar from "../../Sidebar";

const BenutzerAnlegen = () => {
    const [active, setActive] = useState(false);

    return (
        <div class={styles.main}>
            <Sidebar />
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
                                        style={{
                                            backgroundColor: "yellowgreen",
                                        }}
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
                            <h2>FUNKTION*</h2>
                            <div class={styles.dropdownContainer}>
                                <div
                                    onClick={() => setActive(true)}
                                    class={styles.dropdownSelector}
                                >
                                    <h4>Teamleiter (extern)</h4>
                                    <MdOutlineKeyboardArrowDown size={20} />
                                </div>
                                {active && (
                                    <div class={styles.dropdown}>
                                        <div class={styles.dropdownLabel}>
                                            <h4
                                                onClick={() => setActive(false)}
                                                class={styles.dropdownLabel}
                                            >
                                                User (extern)
                                            </h4>
                                        </div>
                                        <div class={styles.dropdownLabel}>
                                            <h4
                                                onClick={() => setActive(false)}
                                                class={styles.dropdownLabel}
                                            >
                                                Administrator (intern)
                                            </h4>
                                        </div>
                                        <div class={styles.dropdownLabel}>
                                            <h4
                                                onClick={() => setActive(false)}
                                                class={styles.dropdownLabel}
                                            >
                                                Projektmitarbeiter (intern)
                                            </h4>
                                        </div>
                                        <div class={styles.dropdownLabel}>
                                            <h4
                                                onClick={() => setActive(false)}
                                                class={styles.dropdownLabel}
                                            >
                                                Buchhalter (intern)
                                            </h4>
                                        </div>
                                    </div>
                                )}
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
        </div>
    );
};

export default BenutzerAnlegen;

{
    /*
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
*/
}
