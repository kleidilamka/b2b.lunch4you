import React, { useState } from "react";
import SignUpStepOne from "../../components/SignUpStepOne";
import SignUpStepThree from "../../components/SignUpStepThree";
import SignUpStepTwo from "../../components/SignUpStepTwo";
import styles from "./SignUp.module.scss";

const SignUp = () => {
    const [step, setStep] = useState(2);

    return (
        <div class={styles.root}>
            {step === 4 ? (
                <div style={{ textAlign: "center" }}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        SCHON GESCHAFFT.
                    </h2>
                    <h2 class={`${styles.bigTitle} ${styles.font}`}>
                        VIELEN DANK FÜR IHRE REGISTRIERUNG.
                    </h2>
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h2 class={`${styles.title} ${styles.font}`}>
                        LUST AUF LUNCH4YOU?
                    </h2>
                    <h2 class={`${styles.bigTitle} ${styles.font}`}>
                        DANN EINFACH REGISTRIEREN UND LOS GEHT'S.
                    </h2>
                </div>
            )}
            {step < 4 && (
                <div class={styles.stepsContainer}>
                    <div class={styles.step}>
                        <h5>Step 1</h5>
                    </div>
                    <div class={styles.dashedLine} />
                    <div class={styles.step}>
                        <h5>Step 2</h5>
                    </div>
                    <div class={styles.dashedLine} />

                    <div class={styles.step}>
                        <h5>Step 3</h5>
                    </div>
                </div>
            )}

            {step === 1 ? (
                <SignUpStepOne setStep={setStep} />
            ) : step === 2 ? (
                <SignUpStepTwo setStep={setStep} />
            ) : step === 3 ? (
                <SignUpStepThree setStep={setStep} />
            ) : (
                <div class={styles.container}>
                    <h4 style={{ marginTop: 24, fontSize: 18 }}>
                        Du erhälst Deine Zugangsdaten per E-Mail. <br />
                        Bitte loggen Dich damit in unserem Anmeldebereich ein.{" "}
                    </h4>
                    <h4 style={{ marginTop: 36, fontSize: 18 }}>
                        Dein Team von Lunch4You.
                    </h4>
                </div>
            )}
        </div>
    );
};

export default SignUp;
