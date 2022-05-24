import React from "react";
import styles from "./Hero.module.scss";
import MainImage from "../../assets/mainImage.jpeg";

const Hero = () => {
    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${MainImage}")`,
                }}
            >
                <h2 class={styles.title}>
                    LUNCH 4 YOU BUSINESS. <br />
                    DIE ERSTE ONLINEKANTINE.
                </h2>
            </div>
        </div>
    );
};

export default Hero;
