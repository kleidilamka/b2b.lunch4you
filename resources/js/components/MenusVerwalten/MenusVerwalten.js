import React from "react";
import styles from "./MenusVerwalten.module.scss";
import Icon from "../../assets/sidebarIcon.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Sidebar from "../Sidebar";

const MenusVerwalten = () => {
    return (
        <div class={styles.main}>
            <Sidebar />
            <div class={styles.root}>
                <img src={Icon} class={styles.mainIcon} />
                <h2 class={styles.mainTitle}>MENÜS VERWALTEN</h2>
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
                                MENÜS FILTERN
                            </h2>
                            <div class={styles.inputContainer}>
                                <input
                                    placeholder="Menü Name auswählen"
                                    class={styles.input}
                                    type="text"
                                />
                                <input
                                    placeholder="Menü Style auswählen"
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
                                NEUES
                                <br />
                                MENÜ
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

export default MenusVerwalten;
