import React from "react";
import styles from "./FirmenVerwalten.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Sidebar from "../Sidebar";

const FirmenVerwalten = () => {
    return (
        <div class={styles.main}>
            <Sidebar />
            <div class={styles.root}>
                <img src={Icon} class={styles.mainIcon} />
                <h2 class={styles.mainTitle}>FIRMEN VERWALTEN</h2>
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
                                FIRMEN FILTERN{" "}
                            </h2>
                            <div class={styles.inputContainer}>
                                <input
                                    placeholder="Firma auswählen"
                                    class={styles.input}
                                    type="text"
                                />
                                <input
                                    placeholder="Standort/PLZ auswählen"
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
                                NEUE
                                <br />
                                FIRMA ANLEGEN
                            </h2>
                            <AiOutlinePlusCircle size={100} color={"#fff"} />
                        </div>
                    </div>
                    {/* Bottom Container */}
                    <div class={styles.bottomContainer}></div>
                </div>
            </div>
        </div>
    );
};

export default FirmenVerwalten;
