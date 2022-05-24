import React from "react";
import Product from "../Product/Product";
import styles from "./Products.module.scss";

const Products = () => {
    return (
        <div class={styles.root}>
            <h1 style={{ color: "#F89B1B" }}>
                FÜR JEDEN GESCHMACK DAS RICHTIGE DABEI.
            </h1>
            <h1 class={styles.title}>
                MACHET MIT UNS <br />
                EINE KULINARISCHE WELTREISE.
            </h1>
            {/*<h5 class={styles.text}>
                Über 60 Menüs aus aller Herren Länder verteilt über viele
                Kontinente.
                <br /> So lecker kann schnelles Essen sein!
    </h5> */}
            <div class={styles.productContainer}>
                <Product />
            </div>
        </div>
    );
};

export default Products;
