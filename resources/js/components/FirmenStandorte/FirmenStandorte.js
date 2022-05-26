import React from "react";
import styles from "./FirmenStandorte.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

const FirmenStandorte = () => {
    return (
        <div class={styles.root}>
            <img src={Icon} class={styles.mainIcon} />
            <h2 class={styles.mainTitle}>BENUTZER VERWALTEN</h2>
            <div class={styles.container}>
                {/* Top Container */}
                <div class={styles.topContainer}>
                    <div class={styles.topLeftContainer}>
                        <h2 style={{ position: "absolute", top: 20, left: 25 }}>
                            STABDORTE FILTERN{" "}
                        </h2>
                        <div class={styles.inputContainer}>
                            <input
                                placeholder="Stadt auswählen"
                                class={styles.input}
                                type="text"
                            />
                            <input
                                placeholder="PLZ auswählen"
                                class={styles.input}
                                type="text"
                            />
                            <button class={styles.searchButton}>Suchen</button>
                        </div>
                    </div>
                </div>
                {/* Bottom Container */}
                <div class={styles.bottomContainer}></div>
            </div>
        </div>
    );
};

export default FirmenStandorte;
