import React from "react";
import styles from "./FooterImages.module.scss";
import FooterImgOne from "../../assets/footerImg1.jpeg";

const FooterImages = () => {
    return (
        <div class={styles.root}>
            {Array.apply(null, { length: 4 }).map((e, i) => (
                <div
                    class={styles.backgroundImage}
                    style={{
                        backgroundImage: `url("${FooterImgOne}")`,
                    }}
                >
                    <div class={styles.container}>
                        <h2 style={{ color: "#A3F359" }}>REGIONALE ZUTATEN</h2>
                        <h2 class={styles.title}>
                            FÜR ALLE DIE WERT AUF <br />
                            GUTES ESSEN LEGEN.
                        </h2>
                        <h5
                            class={styles.text}
                            style={{ fontWeight: "lighter", color: "#3c3c3c" }}
                        >
                            Für die Zubereitung unserer Gerichte verwenden wir
                            aus- schließlich frische und gesunde Zutaten von
                            ausgewählten überwiegend regionalen Lieferanten aus
                            dem Raum Fulda.
                        </h5>
                        <h5 class={styles.text}>
                            Das bedeutet: kurze Wege und geringe Lieferkosten.
                            Außerdem verlieren die Produkte dadurch weniger
                            Nähr- stoffe und werden frisch verarbeitet.
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FooterImages;
