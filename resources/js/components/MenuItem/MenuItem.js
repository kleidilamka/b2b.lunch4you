import React from "react";
import styles from "./MenuItem.module.scss";
import Food from "../../assets/foodBackground.jpeg";

const MenuItem = () => {
    return (
        <div class={styles.root}>
            {Array.apply(null, { length: 7 }).map((e, i) => (
                <div class={styles.wrapper} key={i}>
                    <div class={styles.container}>
                        <img src={Food} class={styles.image} />
                        {/* Middle Container */}
                        <div class={styles.middleContainer}>
                            <h2
                                class={styles.text}
                                style={{ fontSize: 28, fontWeight: "bold" }}
                            >
                                THAI-CURRY
                            </h2>
                            <h4 class={styles.text}>
                                Zarte Hähnchenbrust mit buntem Gemüse und
                                köstlicher Kokosmilch auf leckerem Reis.
                            </h4>
                            <div class={styles.foodCtgList}>
                                {Array.apply(null, { length: 3 }).map(
                                    (e, i) => (
                                        <div class={styles.foodCtg}>
                                            <h4>Low Carb</h4>
                                        </div>
                                    )
                                )}
                            </div>
                            <div class={styles.nutritionList}>
                                {Array.apply(null, { length: 5 }).map(
                                    (e, i) => (
                                        <div style={{ textAlign: "center" }}>
                                            <div
                                                class={
                                                    styles.nutritionContainer
                                                }
                                            >
                                                <h4>103</h4>
                                            </div>
                                            <h4 style={{ marginTop: 5 }}>
                                                Cal
                                            </h4>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        {/* Button */}
                        <button class={styles.button}>DETAILS</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItem;
