import React, { useState } from "react";
import SignUpStepOne from "../../components/SignUpStepOne";
import SignUpStepThree from "../../components/SignUpStepThree";
import SignUpStepTwo from "../../components/SignUpStepTwo";
import styles from "./SignUp.module.scss";
import ForkIcon from "../../assets/forkIcon.svg";

const SignUp = () => {
    const [step, setStep] = useState(3);

    return (
        <div class={styles.root}>
            {step === 4 ? (
                <div style={{ textAlign: "center" }}>
                    <h2 class={styles.title}>SCHON GESCHAFFT.</h2>
                    <h2 class={styles.bigTitle}>
                        VIELEN DANK FÜR IHRE REGISTRIERUNG.
                    </h2>
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h2 class={styles.title}>LUST AUF LUNCH4YOU?</h2>
                    <h2 class={styles.bigTitle}>
                        DANN EINFACH REGISTRIEREN UND LOS GEHT'S.
                    </h2>
                </div>
            )}
            {step > 4 && (
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
                <div class={styles.iconsContainer}>
                    <img src={ForkIcon} class={styles.icon} />
                    <div class={styles.dashedLine} />
                    <img src={ForkIcon} class={styles.icon} />

                    <div class={styles.dashedLine} />

                    <img src={ForkIcon} class={styles.icon} />
                </div>
            )}
            {step === 4 && (
                <div>
                    <h4 style={{ marginTop: 24, fontSize: 18 }}>
                        Deine Lieferung erfolgt am 17.11.2021, ca. 9.00 Uhr
                    </h4>
                </div>
            )}
        </div>
    );
};

export default SignUp;
