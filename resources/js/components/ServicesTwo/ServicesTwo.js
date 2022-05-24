import React from "react";
import styles from "./ServicesTwo.module.scss";
import HandIcon from "../../assets/handIcon.svg";
import ClockIcon from "../../assets/clockIcon.svg";
import CartIcon from "../../assets/cartIcon.svg";
import ForkIcon from "../../assets/forkIcon.svg";

const data = [
    {
        id: "1",
        firstRow: "MENÜS ONLINE",
        secondRow: "AUSWÄHLEN",
        icon: HandIcon,
    },
    {
        id: "2",
        firstRow: "MENÜS ONLINE",
        secondRow: "AUSWÄHLEN",
        icon: ClockIcon,
    },
    {
        id: "3",
        firstRow: "MENÜS ONLINE",
        secondRow: "AUSWÄHLEN",
        icon: CartIcon,
    },
    {
        id: "4",
        firstRow: "MENÜS ONLINE",
        secondRow: "AUSWÄHLEN",
        icon: ForkIcon,
    },
];

const ServicesTwo = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={styles.text}>SO EINFACH, SO GUT.</h2>
                <h2 class={styles.title}>
                    DEINE BESTELLUNG MIT LÜCKENLOS <br />
                    GEKÜHLTER LIEFERKETTE !
                </h2>
                <h4 class={styles.description}>
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
                                <h2 class={styles.text}>
                                    {item.id} <br />
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
