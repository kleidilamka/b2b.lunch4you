import React from "react";
import styles from "./MenuStyles.module.scss";
import FoodStyle from "../../assets/foodBackground.jpeg";
import Asia from "../../assets/MenuAsia.png";
import Style from "../../assets/Schwinge_Fit.svg";

const MenuStyles = () => {
    return (
        <div class={styles.root}>
            <div class={styles.foodStylesList}>
                {Array.apply(null, { length: 6 }).map((e, i) => (
                    <div class={styles.container}>
                        <div
                            src={FoodStyle}
                            class={styles.bgImg}
                            style={{ backgroundImage: `url("${FoodStyle}")` }}
                        >
                            <img src={Style} class={styles.detailsImg} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuStyles;
