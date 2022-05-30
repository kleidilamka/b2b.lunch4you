import React from "react";
import styles from "./Services.module.scss";
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

const Services = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <h2 class={`${styles.title} ${styles.font}`}>
                    SO EINFACH, SO GUT.
                </h2>
                <h2 class={`${styles.bigTitle} ${styles.font}`}>
                    BESTELLT, GEKOCHT, GELIEFERT: <br />
                    MIT WENIGEN KLICKS GENIESSEN.
                </h2>
                <div class={styles.servicesList}>
                    {data.map((item) => {
                        return (
                            <div class={styles.iconContainer}>
                                <img src={item.icon} class={styles.icon} />
                                <h2 class={`${styles.text} ${styles.font}`}>
                                    {item.id}. <br />
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

export default Services;
