import React from "react";
import styles from "./ServicesTwo.module.scss";
import HandIcon from "../../assets/Icon_Bestellvorgang_01.svg";
import ClockIcon from "../../assets/Icon_Bestellvorgang_02.svg";
import CartIcon from "../../assets/Icon_Bestellvorgang_03.svg";
import ForkIcon from "../../assets/Icon_Bestellvorgang_04.svg";

const data = [
    {
        id: "1",
        firstRow: "DEINE",
        secondRow: "BESTELLUNG",
        icon: HandIcon,
    },
    {
        id: "2",
        firstRow: "GEKÜHLT",
        secondRow: "VERPACKT",
        icon: ClockIcon,
    },
    {
        id: "3",
        firstRow: "GEKÜHLTER",
        secondRow: "VERSAND",
        icon: CartIcon,
    },
    {
        id: "4",
        firstRow: "ERWÄRMEN UND",
        secondRow: "GENIESSEN",
        icon: ForkIcon,
    },
];

const ServicesTwo = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={`${styles.text} ${styles.font}`}>
                    SO EINFACH, SO GUT.
                </h2>
                <h2 class={`${styles.title} ${styles.font}`}>
                    DEINE BESTELLUNG MIT LÜCKENLOS <br />
                    GEKÜHLTER LIEFERKETTE !
                </h2>
                <h4 class={`${styles.description}`}>
                    Von der ersten Sekunde an, behandeln wir unsere ausgewählten
                    Zutaten mit viel Liebe und Sorgfalt. Nach der Zubereitung
                    durch unsere Chefköche, werden unsere Menüs direkt unter
                    allen wichtigen hygenischen Aspekten verpackt und gekühlt.
                    Bis zum Eintreffen bei Dir zu Hause, wird diese Kühlkette
                    nicht unter- brochen. Deine Bestellung wird von uns gekühlt
                    versand, so dass Du unsere leckeren Gerichte einfach zu
                    Hause genießen kannst. Im Kühlschrank sind die Menüs bei Dir
                    problemlos 5 Tage bei 4° haltbar.
                </h4>
                <div class={styles.servicesList}>
                    {data.map((item) => {
                        return (
                            <div class={styles.iconContainer}>
                                <img src={item.icon} class={styles.icon} />
                                <h2 class={styles.iconText}>
                                    {item.firstRow} <br />
                                    {item.secondRow}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesTwo;
