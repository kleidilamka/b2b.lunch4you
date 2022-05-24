import React from "react";
import styles from "./Quality.module.scss";
import HandIcon from "../../assets/handIcon.svg";
import ClockIcon from "../../assets/clockIcon.svg";
import CartIcon from "../../assets/cartIcon.svg";
import ForkIcon from "../../assets/forkIcon.svg";
import HeartIcon from "../../assets/heartIcon.svg";

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

const Quality = () => {
    return (
        <div class={styles.root}>
            <div class={styles.container}>
                <img src={HeartIcon} style={{ height: 100, width: 100 }} />
                <h2 class={styles.text}>WOFÜR WIR STEHEN</h2>
                <h2 class={styles.title}>UNSER QUALITÄTSVERSPRECHEN</h2>
                <h4 class={styles.description}>
                    Gesund & lecker, frisch & nachhaltig hergestellt mit
                    Zutaten, <br />
                    die überwiegend in der Region produziert werden: das ist
                    unser Konzept bei Lunch4You!
                </h4>
                <div class={styles.servicesList}>
                    {data.map((item) => {
                        return (
                            <div class={styles.iconContainer}>
                                <img src={item.icon} class={styles.icon} />
                                <h2 class={styles.text}>
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

export default Quality;
