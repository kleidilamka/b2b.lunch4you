import React from "react";
import styles from "./AlleBenutzer.module.scss";
import Icon from "../../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

const AlleBenutzer = () => {
    return (
        <div class={styles.root}>
            <img src={Icon} class={styles.mainIcon} />
            <h2 class={styles.mainTitle}>BENUTZER VERWALTEN</h2>
            <div class={styles.container}>
                {/* Top Container */}
                <div class={styles.topContainer}>
                    <div class={styles.topLeftContainer}>
                        <h2 style={{ position: "absolute", top: 20, left: 20 }}>
                            BENUTZER FILTERN
                        </h2>
                        <div class={styles.inputContainer}>
                            <input
                                placeholder="Vornamen auswählen"
                                class={styles.input}
                                type="text"
                            />
                            <input
                                placeholder="Nachnamen auswählen"
                                class={styles.input}
                                type="text"
                            />
                            <button class={styles.searchButton}>Suchen</button>
                        </div>
                    </div>
                    <div class={styles.topRightContainer}>
                        <h2 class={styles.buttonText}>
                            NEUER <br />
                            BENUTZER
                        </h2>
                        <AiOutlinePlusCircle size={100} color={"#fff"} />
                    </div>
                </div>
                {/* Bottom Container */}
                <div class={styles.bottomContainer}></div>
            </div>
        </div>
    );
};

export default AlleBenutzer;
