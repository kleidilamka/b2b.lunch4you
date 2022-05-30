import React from "react";
import styles from "./SignUpStepTwo.module.scss";

const SignUpStepTwo = ({ setStep }) => {
    return (
        <div class={styles.root}>
            {/* SignUp Container */}
            <div class={styles.signUpContainer}>
                <h2 class={`${styles.bigTitle} ${styles.font}`}>
                    STEP 2 VON 3: REGISTRIERUNG ODER ANMELDUNG
                </h2>
                <h2></h2>
                <div class={styles.container}>
                    <hr />

                    <div class={styles.registerContainer}>
                        {/* First Row */}
                        <div class={styles.row}>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    FIRMENNAME*{" "}
                                </h2>
                            </div>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    ANSPRECHPARTNER*{" "}
                                </h2>
                            </div>
                        </div>
                        <div class={styles.row}>
                            <div class={styles.inputRow}>
                                <input
                                    class={styles.input}
                                    placeholder="Firmennamen eingeben"
                                />
                            </div>

                            <div class={styles.doubleInput}>
                                <input
                                    class={styles.input}
                                    placeholder="Vornamen eingeben"
                                />
                                <input
                                    class={styles.input}
                                    style={{ marginLeft: 10 }}
                                    placeholder="Nachnamen eingeben"
                                />
                            </div>
                        </div>
                        {/* Second Row */}
                        <div class={styles.row}>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    E-MAIL*
                                </h2>
                            </div>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    TELEFONNUMMER*
                                </h2>
                            </div>
                        </div>
                        <div class={styles.row}>
                            <div class={styles.inputRow}>
                                <input
                                    class={styles.input}
                                    placeholder="E-Mail eingeben"
                                />
                            </div>

                            <div class={styles.inputRow}>
                                <input
                                    class={styles.input}
                                    placeholder="Telefonnummer eingeben"
                                />
                            </div>
                        </div>
                        {/* Third Row */}
                        <div class={styles.row}>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    STRASSE*
                                </h2>
                            </div>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    HAUSNUMMER*
                                </h2>
                            </div>
                        </div>
                        <div class={styles.row}>
                            <div class={styles.inputRow}>
                                <input
                                    class={styles.input}
                                    placeholder="Strasse eingeben"
                                />
                            </div>

                            <div class={styles.inputRow}>
                                <input
                                    class={styles.input}
                                    placeholder="Hausnummer eingeben"
                                />
                            </div>
                        </div>
                        {/* Fourth Row */}
                        <div class={styles.row}>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    POSTLEITZAHL*
                                </h2>
                            </div>
                            <div class={styles.labelRow}>
                                <h2 class={`${styles.title} ${styles.font}`}>
                                    STADT*{" "}
                                </h2>
                            </div>
                        </div>
                        <div class={styles.row}>
                            <div class={styles.inputRow}>
                                <input
                                    class={styles.input}
                                    placeholder="PLZ eingeben"
                                />
                            </div>

                            <div class={styles.inputRow}>
                                {" "}
                                <input
                                    class={styles.input}
                                    placeholder="Stadt eingeben"
                                />
                            </div>
                        </div>
                        {/* Fifth Row */}
                        <div class={styles.row}>
                            <div class={styles.textAreaContainer}>
                                <div style={{ marginTop: 50 }}>
                                    <h2
                                        class={`${styles.title} ${styles.font}`}
                                    >
                                        PERSÖNLICHE NACHRICHT ODER FRAGEN?
                                    </h2>
                                </div>

                                <textarea
                                    class={styles.textArea}
                                    id="w3review"
                                    name="w3review"
                                    rows="4"
                                    cols="50"
                                    placeholder="Wir bearbeiten Ihre Anfrage und melden uns bei Ihnen."
                                ></textarea>
                            </div>
                        </div>

                        {/* Button  Row */}
                        <div class={styles.buttonContainer}>
                            <button
                                onClick={() => setStep(1)}
                                class={`${styles.backButton} ${styles.font}`}
                            >
                                ZURÜCK
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                class={`${styles.forwardButton} ${styles.font}`}
                            >
                                WEITER ZU SCHRITT 3 VON 3
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpStepTwo;
