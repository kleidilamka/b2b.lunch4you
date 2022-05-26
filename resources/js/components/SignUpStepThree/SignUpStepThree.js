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
                    <h2>RECHNUNGSDRESSE</h2>
                    <h2>Angaben ändern?</h2>
                </div>
                <h2 class={styles.text}>Frau Maxi Mustermann</h2>
                <h2 class={styles.text}>Musterstrasse 1</h2>
                <h2 class={styles.text} style={{ marginBottom: 24 }}>
                    12345 Musterhausen
                </h2>
                {/* Third Row */}
                <hr />
                <div class={styles.row}>
                    <h2>WARENKORBÜBERSICHT</h2>
                    <h2>Angaben ändern?</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={styles.text}>Thai Curry</h2>
                    <h2 class={styles.text}>€ 17.00</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={styles.text}>Thai Curry</h2>
                    <h2 class={styles.text}>€ 17.00</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={styles.text}>Thai Curry</h2>
                    <h2 class={styles.text}>€ 17.00</h2>
                </div>
                {/* Fourth Row */}
                <hr />
                <div class={styles.row}>
                    <h2 class={styles.text}>Zwischensumme</h2>
                    <h2 class={styles.text}>€ 51.00 </h2>
                </div>
                <div class={styles.row}>
                    <h2 class={styles.text}>Versandkosten</h2>
                    <h2 class={styles.text}>€ 4.99</h2>
                </div>
                <div class={styles.row}>
                    <h2 class={styles.text}>Rabatt Gutschein </h2>
                    <h2 class={styles.text}>-€ 5,00 </h2>
                </div>
                <div class={styles.row}>
                    <h2 style={{ fontWeight: 800 }}>Gesamt</h2>
                    <h2 class={styles.text}>€ 50.99</h2>
                </div>
                {/* Fifth Row */}
                <hr />
                <div class={styles.row}>
                    <h2>GUTSCHEINCODE</h2>
                    <input
                        class={styles.input}
                        placeholder="Gutscheincode eingeben"
                    />
                </div>
                {/* Sixth Row */}
                <hr />
                <div class={styles.row}>
                    <h2 style={{ fontWeight: 800 }}>WUNSCHLIEFERDATUM</h2>
                    <h2>Lieferdatum ändern?</h2>
                </div>
                <div class={styles.row}>
                    <div style={{ width: "50%" }}>
                        <h2 class={styles.text}>
                            Donnerstag, 17. November 2021, ca. 9.00 Uhr
                        </h2>
                        <h2 class={styles.text}>
                            In einigen Fällen kann es durch
                            Lieferschwierigkeiten des Paketdienstleisters zu
                            Verzögerungen kommen
                        </h2>
                    </div>
                    <h2></h2>
                </div>
                {/* Seventh Row */}
                <hr />
                <h2 class={styles.title}>VERSANDART</h2>
                <div class={styles.row}>
                    <h2 class={styles.text}>UPS</h2>
                    <h2 class={styles.text}>€ 4,99</h2>
                </div>
                <h2 class={styles.title}>LIEFERUNG DEINER BESTELLUNG</h2>
                <h2 class={styles.text}>
                    Wir liefern deutschlandweit mit UPS express. In der Regel
                    versenden wir montags bis donnerstags. Bei Versand mit
                    Wunschtermin berücksichtigen wir die durchschnittliche
                    Versandzeit der Post. Eine Garantie für die Einhaltung des
                    Wunschtermin können wir nicht geben. Die Zustellung unserer
                    Pakete erfolgt somit im Normalfall in 24 Stunden, in Ausnah-
                    mefällen kann es 48 Stunden dauern. In dieser Zeit ist die
                    Kühlkette durch das innovative und umweltfreundliche
                    Versand- system gesichert.
                </h2>
                {/* Eight Row */}
                <hr />
                <h2 class={styles.title}>DEINE MÖGLICHKEITEN DER ZAHLUNG</h2>
                <img src={Payments} class={styles.image} />
                {/* Ninth Row */}
                <hr />
                <h2 class={styles.title}>RÜCKSENDUNG EISPACKS</h2>
                <div class={styles.row}>
                    <h2 class={styles.text}>
                        Ab einer Menge von 6 Eispacks können Sie uns diese
                        zurück senden.
                    </h2>
                    <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label class={styles.label} for="scales">
                            Rücksendeschein anforden
                        </label>
                    </div>
                </div>
                {/* Tenth Row */}
                <hr />
                <div class={styles.checkbox}>
                    <input type="checkbox" id="scales" name="scales" />
                    <label class={styles.label} for="scales">
                        Ich habe die Datenschutzerklärung gelesen und erkläre
                        mich damit einverstanden, dass meine Daten elektronisch
                        verarbeitet und gespeichert werden.
                    </label>
                </div>
                <div class={styles.checkbox}>
                    <input type="checkbox" id="scales" name="scales" />
                    <label class={styles.label} for="scales">
                        Ich habe die AGB gelesen und erkläre mich mit diesen
                        einverstanden.
                    </label>
                </div>
                {/* Tenth Row */}
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
