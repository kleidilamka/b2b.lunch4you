import React from "react";
import styles from "./Product.module.scss";
import Food from "../../assets/food.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();

    const goToProductDetails = () => {
        navigate("/product");
    };

    return (
        <div class={styles.root}>
            {Array.apply(null, { length: 7 }).map((e, i) => (
                <div
                    class={styles.container}
                    key={i}
                    onClick={goToProductDetails}
                >
                    <img src={Food} class={styles.image} />
                    <h4 class={`${styles.text} ${styles.font}`}>
                        LINGUINE ALFREDO
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default Product;
