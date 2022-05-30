import React from "react";
import styles from "./Login.module.scss";
import MainImage from "../../assets/mainImage.jpeg";

const Login = () => {
    return (
        <div
            class={styles.bgImage}
            style={{
                backgroundImage: `url("${MainImage}")`,
            }}
        >
            <div class={styles.container}>
                <h2 class={styles.title}>ANMELDEN</h2>
                <input class={styles.input} placeholder="Benutzernamen" />
                <input class={styles.input} placeholder="Passwort" />
                {/* First Row */}
                <div class={styles.row}>
                    <div class={styles.checkbox}>
                        <input type="checkbox" />
                        <h4 style={{ color: "#fff", marginLeft: 5 }}>
                            speichern
                        </h4>
                    </div>
                    <h4 style={{ color: "#fff" }}>Passwort vergessen?</h4>
                </div>
                {/* Second Row */}
                <div class={styles.row}>
                    <button class={styles.button}>Anmelden</button>
                    <button class={styles.button}>QR-Anmeldung</button>
                </div>
                {/* Third Row */}
                <div class={styles.row}>
                    <h4 style={{ color: "#fff" }}>Passwort vergessen?</h4>
                    <button class={styles.button} style={{ width: "60%" }}>
                        Jetzt Registrieren
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
