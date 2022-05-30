import React, { useState } from "react";
import styles from "./SignUpStepOne.module.scss";
import Food from "../../assets/foodBackground.jpeg";
import { BsTrash } from "react-icons/bs";

const SignUpStepOne = ({ setStep }) => {
    const [neinChecked, setNeinChecked] = useState(false);

    return (
        <div class={styles.root}>
            <h2 class={`${styles.mainTitle} ${styles.font}`}>
                STEP 1 VON 3: WARENKORB BESTELLÜBERSICHT
            </h2>
            <div class={styles.container}>
                <hr />
                <h2 class={`${styles.title} ${styles.font}`}>
                    MELDE JETZT DEIN UNTERNEHMEN AN.
                </h2>
                <h2 class={`${styles.description} ${styles.font}`}>
                    Die Registrierung geht schnell. Bitte gebe dafür einfach nur
                    die erforderlichen Daten ein. Nach der Registrierung erhälst
                    Du die Zugangsdaten und kannst Deine Bestellungen und den
                    Mitgliederbereich verwalten.
                </h2>
                <h2 style={{ marginTop: 48, fontSize: 20, fontWeight: "500" }}>
                    Hast Du ein Unternehmen mit Firmensitz in Deutschland?
                </h2>
                <div class={styles.inputContainer}>
                    <input class={styles.input} type="checkbox" />
                    <label class={`${styles.label} ${styles.font}`}>Ja</label>
                </div>
                <div class={styles.inputContainer}>
                    <input
                        onClick={() => setNeinChecked(!neinChecked)}
                        class={styles.input}
                        type="checkbox"
                    />
                    <label
                        class={`${styles.label} ${styles.font}`}
                        style={{ marginBottom: 18 }}
                    >
                        Nein
                    </label>
                    {neinChecked && (
                        <div class={styles.neinCheckedContainer}>
                            <h2 style={{ marginBottom: 8, color: "#fff" }}>
                                DU HAST KEIN UNTERNEHMEN?
                            </h2>
                            <h4 style={{ color: "#fff", fontWeight: "bold" }}>
                                Wir beliefern Dich natürlich gerne auch als
                                Privatperson. Hierfür tätige Deine Betsellung
                                bitte über www.lunch4you.de
                            </h4>
                        </div>
                    )}
                </div>
                {/* Button Container */}
                <hr />

                <div class={styles.buttonContainer}>
                    <button
                        onClick={() => setStep(2)}
                        class={`${styles.button} ${styles.font}`}
                        style={{ backgroundColor: "#f89b1b" }}
                    >
                        WEITER ZU SCHRITT 2 VON 3
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpStepOne;
