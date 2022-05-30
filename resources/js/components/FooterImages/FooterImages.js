import React from "react";
import styles from "./FooterImages.module.scss";
import FooterImgTwo from "../../assets/footerImg2.jpeg";
import FooterImgThree from "../../assets/footerImg3.jpg";

const data = [
    {
        id: "1",
        text: "REGIONALE ZUTATEN",
        color: "yellowgreen",
        image: FooterImgTwo,
        titleOne: "FÜR ALLE DIE WERT AUF ",
        titleTwo: "GUTES ESSEN LEGEN.",
        descriptionOne:
            "Für die Zubereitung unserer Gerichte verwenden wir ausschließlich frische und gesunde Zutaten von ausgewählten überwiegend regionalen Lieferanten aus dem Raum Fulda. ",
        descriptionTwo:
            "Das bedeutet: kurze Wege und geringe Lieferkosten. Außerdem verlieren die Produkte dadurch weniger Nährstoffe und werden frisch verarbeitet. ",
    },
    {
        id: "2",
        text: "FRISCH. BUNT. GESUND.",
        color: "#DB0267",
        image: FooterImgTwo,
        titleOne: "GESUNDES UND",
        titleTwo: "SCHNELLES ESSEN.",
        descriptionOne:
            "Von unseren Chefköchen entwickelte, ausgewogene Rezepte. Mit dem Fokus auf gesundes, fertig zubereitetes Mittagessen mit wenig Zucker, Fett und ohne die Zufuhr von Zusatzstoffen. Mit den besten Zutaten direkt aus der Region.",
        descriptionTwo:
            "Denn wir sind mitten in der schönen Rhön beheimatet,  im grünen Herzen Deutschlands. Unsere Produkte beziehen wir immer frisch von regionalen Versorgern.",
    },
    {
        id: "3",
        text: "AUCH AUSSEN HERUM UMWELTBEWUSST",
        color: "#1FB7C7",
        image: FooterImgThree,
        titleOne: "VERPACKUNG: ",
        titleTwo: "100% NACHHALTIG",
        descriptionOne:
            "Wir legen großen Wert auf unseren ökologischen Fußabdruck. Für uns heißt das, dass unsere Menüs nachhaltig verpackt werden. Unsere Schalen für unser Essen bestehen aus Zuckerrohr und die Folie ist aus umweltfreundlicher Zellulose.",
        descriptionTwo:
            "Natürlich kommt auch unsere Versandverpackung ganz ohne Styropor und Plastik bei dir an.",
    },
    {
        id: "4",
        text: "QUALITÄT VON ANFANG BIS ENDE",
        color: "#f89b1b",
        image: FooterImgTwo,
        titleOne: "SICHERHEIT BEI DER",
        titleTwo: "GESAMTEN HERSTELLUNG.",
        descriptionOne:
            "Du musst dir keine Sorgen machen wir sind absolute Profis und führen eine regelmäßige Überprüfung sämtlicher Waren hinsichtlich des Qualitäts und Hygienezustands durch. Dabei kontrollieren wir die Waren über den gesamten Entstehungsprozess hinweg. Wir sind HACCP zertifiziert – das bedeutet die Herstellung unserer Menüs erfolgt grundsätzlich unter sehr streng kontrollierten hygienischen Prozessen und das alles für deinen Schutz!",
        descriptionTwo: "",
    },
];

const FooterImages = () => {
    return (
        <div class={styles.root}>
            {data.map((item) => (
                <div
                    class={styles.backgroundImage}
                    style={{
                        backgroundImage: `url("${item.image}")`,
                    }}
                >
                    <div class={styles.container}>
                        <h2
                            class={`${styles.text} ${styles.font}`}
                            style={{ color: item.color }}
                        >
                            {item.text}
                        </h2>
                        <h2 class={`${styles.title} ${styles.font}`}>
                            {item.titleOne} <br />
                            {item.titleTwo}
                        </h2>
                        <h5
                            class={`${styles.description} ${styles.font}`}
                            style={{ fontWeight: "lighter", color: "#3c3c3c" }}
                        >
                            {item.descriptionOne}
                        </h5>
                        <h5
                            class={`${styles.description} ${styles.font}`}
                            style={{ fontWeight: "lighter", color: "#3c3c3c" }}
                        >
                            {item.descriptionTwo}
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FooterImages;
