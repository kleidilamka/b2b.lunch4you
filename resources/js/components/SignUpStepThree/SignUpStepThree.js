import React from "react";
import styles from "./SignUpStepThree.module.scss";
import Payments from "../../assets/payments.png";

const CheckoutStepThree = ({ setStep }) => {
    return (
        <div class={styles.root}>
            <h2 class={styles.bigTitle}>
                STEP 1 VON 3: WARENKORB BESTELLÜBERSICHT
            </h2>
            <div class={styles.container}>
                <hr />
                <h2 class={styles.title}>BITTE ÜBERPRÜFE DEINE ANGABEN. </h2>
                {/* First Row */}
                <div class={styles.row}>
                    <h2>LIEFERADRESSE</h2>
                    <h2>Angaben ändern?</h2>
                </div>
                <h2 class={styles.text}>Frau Maxi Mustermann</h2>
                <h2 class={styles.text}>Musterstrasse 1</h2>
                <h2 class={styles.text} style={{ marginBottom: 24 }}>
                    12345 Musterhausen
                </h2>
                {/* Second Row */}
                <hr />
                <div class={styles.row}>
                    <h2>Ansprechpartner: Max Mustermann </h2>
                    <h2>Angaben ändern?</h2>
                </div>

                {/* Third Row */}
                <hr />
                <div class={styles.row}>
                    <h2>E-Mail: mustermann@mustermann.de</h2>
                    <h2>Angaben ändern?</h2>
                </div>
                <h2 class={styles.text} style={{ marginBottom: 24 }}>
                    Telefon: 01245 678910
                </h2>

                {/* Fourth Row */}
                <hr />
                <div class={styles.row}>
                    <div class={styles.inputContainer}>
                        <input class={styles.input} type="checkbox" />
                        <h2 class={styles.text} style={{ marginLeft: 12 }}>
                            Ich habe die{" "}
                            <span
                                style={{
                                    color: "#f89b1b",
                                    fontWeight: "bold",
                                    marginInline: 5,
                                }}
                            >
                                Datenschutzerklärung
                            </span>{" "}
                            gelesen und erkläre mich damit einverstanden, dass
                            meine Daten elektronisch verarbeitet und gespeichert
                            werden.
                        </h2>
                    </div>
                </div>
                <div class={styles.row}>
                    <div class={styles.inputContainer}>
                        <input class={styles.input} type="checkbox" />
                        <h2 class={styles.text} style={{ marginLeft: 12 }}>
                            Ich habe die{" "}
                            <span
                                style={{
                                    color: "#f89b1b",
                                    fontWeight: "bold",
                                }}
                            >
                                AGB
                            </span>{" "}
                            gelesen und erkläre mich mit diesen einverstanden.
                        </h2>
                    </div>
                </div>

                {/* Fifth Row */}
                {/* Button  Row */}
                <hr />
                <div class={styles.row}>
                    <button
                        onClick={() => setStep(2)}
                        class={styles.backButton}
                    >
                        ZURÜCK
                    </button>
                    <button
                        onClick={() => setStep(4)}
                        class={styles.forwardButton}
                        style={{ width: 400 }}
                    >
                        BESTELLUNG ABSENDEN UND BEZAHLEN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutStepThree;
