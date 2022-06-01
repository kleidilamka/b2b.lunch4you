import React from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import PaymentCards from "../../assets/paymentCards.png";

const Footer = () => {
    return (
        <div class={styles.root}>
            <div class={styles.subscribeContainer}>
                <h2
                    class={`${styles.title} ${styles.font}`}
                    style={{ color: "#bd006c" }}
                >
                    LECKER NEWSELLTER.
                </h2>
                <h1 class={`${styles.bigTitle} ${styles.font}`}>
                    JETZT FÜR UNSEREN NEWSLETTER ANMELDEN <br />
                    UND GRATISVERSAND SICHERN!
                    <div class={styles.inputs}>
                        <input
                            class={styles.input}
                            placeholder="E-Mail eingeben"
                        />
                        <button class={`${styles.button} ${styles.font}`}>
                            NEWSLETTER BESTELLEN
                        </button>
                    </div>
                </h1>
            </div>
            <div class={styles.topContainer}>
                <FaInstagram
                    style={{ paddingLeft: 50 }}
                    size={30}
                    color={"white"}
                />
                <FaFacebookSquare
                    size={30}
                    color={"white"}
                    style={{ marginLeft: 20 }}
                />
            </div>
            <div class={styles.middleContainer}>
                <div class={styles.middleLeftContainer}>
                    <h4 class={styles.uppercase}>WIDERRUF</h4>
                    <h4 class={styles.uppercase}>AGB</h4>
                    <h4 class={styles.uppercase}>IMPRESSUM</h4>
                    <h4 class={styles.uppercase}>DATENSCHUTZ</h4>
                </div>
                <div class={styles.middleMiddleContainer}>
                    <h4 class={styles.uppercase}>WIDERRUF</h4>
                    <h4 class={styles.lowercase}>
                        Bürgermeister-Ebert-Straße 1
                    </h4>
                    <h4 class={styles.lowercase}>36124 Eichenzell</h4>
                    <h4 class={styles.lowercase}>T: 0800 7767677</h4>
                    <h4 class={styles.lowercase}>M: info@lunch4you.de</h4>
                </div>
                <div class={styles.middleRightContainer}>
                    <h4 class={styles.uppercase}>SICHERE ZAHLUNGSARTEN</h4>
                    <img src={PaymentCards} class={styles.image} />
                </div>
            </div>
            <div class={styles.bottomContainer}>
                <h4 style={{ paddingLeft: 50 }}>
                    © 2022 Creativ-Cult All rights reserved.
                </h4>
            </div>
        </div>
    );
};

export default Footer;
