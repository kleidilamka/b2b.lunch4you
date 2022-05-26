import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo_new.png";
import HeartIconOrange from "../../assets/heartIconOrange.svg";
import ExpressVersand from "../../assets/Icon_Expressversand.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LoginIcon from "../../assets/loginIcon.svg";
import CartIcon from "../../assets/cartNavIcon.svg";

const Navbar = () => {
    return (
        <div class={styles.root}>
            <img src={Logo} class={styles.logo} />
            {/* First Nav Row */}
            <div class={styles.firstRow}>
                <div class={styles.titleContainer}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={HeartIconOrange} class={styles.heartIcon} />
                        <h2 style={{ color: "#f89b1b", marginLeft: 10 }}>
                            FRISCH GEKOCHT, DIREKT ZU DIR NACH HAUSE!
                        </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={ExpressVersand} class={styles.heartIcon} />
                        <h2 style={{ color: "#fff", marginLeft: 10 }}>
                            {" "}
                            EXPRESSVERSAND IN DEUTSCHLAND
                        </h2>
                    </div>
                    <h2></h2>
                </div>
            </div>
            {/* Second Nav Row */}
            <div class={styles.secondRow}>
                <div class={styles.navContainer}>
                    <div
                        class={styles.firstNavItem}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            position: "relative",
                        }}
                    >
                        <h2 class={styles.navTitle}>ÜBER LUNCH4YOU </h2>
                        <MdOutlineKeyboardArrowDown size={20} />
                    </div>
                    <div>
                        <h2>UNSERE MENÜS</h2>
                    </div>
                    <div>
                        <h2>LIEFERANTEN</h2>
                    </div>
                    <div>
                        <h2>KÖCHE</h2>
                    </div>
                    <div>
                        <h2>BLOG</h2>
                    </div>
                    <div>
                        <h2>FAQ</h2>
                    </div>
                    <div>
                        <h2>KONTAKT</h2>
                    </div>
                </div>
                <img src={LoginIcon} class={styles.navIconOne} />
                <img src={CartIcon} class={styles.navIcon} />
            </div>
        </div>
    );
};

export default Navbar;
