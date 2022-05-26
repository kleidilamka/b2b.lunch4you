import React from "react";
import styles from "./MenuStyles.module.scss";
import FoodStyle from "../../assets/foodStyle.png";

const MenuStyles = () => {
    return (
        <div class={styles.root}>
            <div class={styles.foodStylesList}>
                {Array.apply(null, { length: 7 }).map((e, i) => (
                    <div class={styles.foodStyles} key={i}>
                        <img src={FoodStyle} class={styles.foodStyleImage} />
                        <h4 class={styles.label}>
                            GERMAN <br /> STYLE
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuStyles;
