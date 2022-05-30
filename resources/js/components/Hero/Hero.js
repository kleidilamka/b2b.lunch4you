import React from "react";
import styles from "./Hero.module.scss";
import MainImage from "../../assets/mainImage.jpeg";
import ServicesImage from "../../assets/servicesImage.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate("/signup");
    };

    return (
        <div class={styles.root}>
            {/* Background Image */}
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${MainImage}")`,
                }}
            >
                <h2 class={`${styles.title} ${styles.font}`}>
                    LUNCH 4 YOU BUSINESS. <br />
                    DIE ERSTE ONLINEKANTINE.
                </h2>
            </div>
            {/* Jetzt Registrieren */}
            <div class={styles.registrierenContainer}>
                <div class={styles.container}>
                    <h2
                        class={`${styles.mainText} ${styles.font}`}
                        style={{ color: "#f89b1b" }}
                    >
                        GEMEINSAM ESSEN. JEDERZEIT UND ÜBERALL.
                    </h2>
                    <h2 class={`${styles.registrierenTitle} ${styles.font}`}>
                        UNSERE MISSION: <br />
                        LECKERES ESSEN. JEDEN TAG.
                    </h2>
                    <h4 class={`${styles.text} ${styles.font}`}>
                        Sie brauchen eine transparente und flexible Lösung für
                        die Versorgung Ihrer Mitarbeiter? Kein Problem! Mit
                        unserer Lunch4You Plattform für Business-Kunden bieten
                        wir Ihnen die maximale Flexibilität! Egal ob Sie das
                        Essen täglich oder wöchentlich zentral bestellen wollen,
                        oder ob jeder Mitarbeiter individuell bestellen soll.
                        Oder ob Sie eine individuelle Bezuschussung wünschen -
                        wir haben die Lösung für Sie.
                    </h4>
                    <button
                        class={`${styles.button} ${styles.font}`}
                        onClick={goToSignUp}
                    >
                        JETZT REGISTRIEREN
                    </button>
                </div>
            </div>
            {/* Services Image Background */}
            <div
                class={styles.servicesBackground}
                style={{
                    backgroundImage: `url("${ServicesImage}")`,
                }}
            ></div>
        </div>
    );
};

export default Hero;
