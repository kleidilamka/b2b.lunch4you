import React from "react";
import styles from "./FirmendatenAnzeigen.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Sidebar from "../Sidebar";

const FirmendatenAnzeigen = () => {
    return (
        <div class={styles.main}>
            <Sidebar />
            <div class={styles.root}>
                <img src={Icon} class={styles.mainIcon} />
                <h2 class={styles.mainTitle}>FIRMENDATEN ANZEIGEN</h2>
                <div class={styles.container}>
                    <div class={styles.row}>
                        <div class={styles.box}>
                            <div class={styles.labels}>
                                <h2 class={styles.title}>FIRMENNAME </h2>
                                <h2 class={styles.text}>Mustermann GmbH</h2>
                            </div>
                            <div class={styles.labels}>
                                <h2 class={styles.title}>FIRMENNAME </h2>
                                <h2 class={styles.text}>Mustermann GmbH</h2>
                            </div>
                            <div class={styles.labels}>
                                <h2 class={styles.title}>FIRMENNAME </h2>
                                <h2 class={styles.text}>Mustermann GmbH</h2>
                            </div>
                            <div class={styles.labels}>
                                <h2 class={styles.title}>FIRMENNAME </h2>
                                <h2 class={styles.text}>Mustermann GmbH</h2>
                            </div>
                            <div class={styles.labels}>
                                <h2 class={styles.title}>FIRMENNAME </h2>
                                <h2 class={styles.text}>Mustermann GmbH</h2>
                            </div>
                            <div class={styles.labels}>
                                <h2 class={styles.title}>FIRMENNAME </h2>
                                <h2 class={styles.text}>Mustermann GmbH</h2>
                            </div>
                        </div>
                        <div class={styles.boxTwo}>
                            {" "}
                            <div class={styles.logo}></div>
                        </div>
                    </div>
                    <div class={styles.row}>
                        <div class={styles.boxThree}></div>
                        {/* Button  Row */}
                        <div class={styles.buttonContainer}>
                            <button class={styles.backButton}>Abbrechen</button>
                            <button class={styles.forwardButton}>
                                Firmandaten bearbeiten
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirmendatenAnzeigen;
