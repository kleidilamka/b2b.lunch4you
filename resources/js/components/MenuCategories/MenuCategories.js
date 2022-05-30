import React from "react";
import styles from "./MenuCategories.module.scss";

const MenuCategories = () => {
    return (
        <div class={styles.root}>
            {/* Categories */}
            <div class={styles.categoriesContainer}>
                <div class={styles.topContainer}>
                    <h2 class={styles.font}>SPEZIELLE WÜNSCHE? ABER GERNE!</h2>
                </div>
                {/* Column 1 */}
                <div class={styles.bottomContainer}>
                    {Array.apply(null, { length: 5 }).map((e, i) => (
                        <div class={styles.inputs}>
                            <input
                                type="checkbox"
                                id="vegetarisch"
                                name="vegetarisch"
                            />
                            <label
                                class={`${styles.label} ${styles.font}`}
                                for="vegetarisch"
                            >
                                Vegetarisch
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuCategories;
