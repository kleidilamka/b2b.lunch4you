import React from "react";
import MenuCategories from "../../components/MenuCategories";
import MenuItem from "../../components/MenuItem";
import MenuStyles from "../../components/MenuStyles";
import styles from "./Menus.module.scss";

const Menus = () => {
    return (
        <div class={styles.root}>
            <h2 class={styles.font} style={{ color: "#F89B1B", fontSize: 48 }}>
                FÜR JEDEN GESCHMACK DAS RICHTIGE DABEI.
            </h2>
            <h2
                class={`${styles.title} ${styles.font}`}
                style={{ fontSize: 60 }}
            >
                MACHEN SIE MIT UNS <br />
                EINE KULINARISCHE WELTREISE.
            </h2>
            {/* Menu Styles */}
            <MenuStyles />
            {/* Menu Categories */}
            <MenuCategories />
            {/* Menu Item */}
            <div class={styles.menuItemContainer}>
                <MenuItem />
            </div>
        </div>
    );
};

export default Menus;
