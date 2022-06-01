import React from "react";
import styles from "./SignUpStepTwo.module.scss";

const SignUpStepTwo = ({ setStep }) => {
    return (
        <div class={styles.root}>
            {/* SignUp Container */}
            <div class={`${styles.signUpContainer} ${styles.font}`}>
                <h2 class={`${styles.bigTitle} ${styles.font}`}>
                    STEP 2 VON 3: REGISTRIERUNG ODER ANMELDUNG
                </h2>
                <h2></h2>
                <div class={styles.container}>
                    <hr />
                    <h2
                        class={styles.font}
                        style={{
                            fontSize: 36,
                            color: "#f89b1b",
                            marginTop: 32,
                        }}
                    >
                        NEUKUNDE?
                    </h2>
                    <div class={styles.registerContainer}>
                        {/* First Row */}
                        <div class={styles.row}>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>FIRMENNAME*</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Firmennamen eingeben"
                                />
                            </div>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>
                                    ANSPRECHPARTNER*
                                </h2>
                                <input
                                    class={styles.input}
                                    placeholder="Vornamen eingeben"
                                />
                            </div>
                        </div>
                        {/* Second Row */}
                        <div class={styles.row}>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>E-MAIL*</h2>
                                <input
                                    class={styles.input}
                                    placeholder="E-Mail eingeben"
                                />
                            </div>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>
                                    TELEFONNUMMER*
                                </h2>
                                <input
                                    class={styles.input}
                                    placeholder="Telefonnummer eingeben"
                                />
                            </div>
                        </div>
                        {/* Third Row */}
                        <div class={styles.row}>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>STRASSE*</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Strasse eingeben"
                                />
                            </div>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>HAUSNUMMER*</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Hausnummer eingeben"
                                />
                            </div>
                        </div>
                        {/* Fourth Row */}
                        <div class={styles.row}>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>POSTLEITZAHL*</h2>
                                <input
                                    class={styles.input}
                                    placeholder="PLZ eingeben"
                                />
                            </div>
                            <div class={styles.column}>
                                <h2 class={styles.inputTitle}>STADT*</h2>
                                <input
                                    class={styles.input}
                                    placeholder="Stadt eingeben"
                                />
                            </div>
                        </div>
                        {/* Fifth Row */}
                        <div class={styles.row}>
                            <div class={styles.textAreaContainer}>
                                <h2 class={styles.inputTitle}>
                                    PERSÖNLICHE NACHRICHT ODER FRAGEN?
                                </h2>
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
                                class={styles.backButton}
                            >
                                ZURÜCK
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                class={styles.forwardButton}
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
