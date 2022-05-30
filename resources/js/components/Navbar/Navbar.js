import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo_new.png";
import HeartIconOrange from "../../assets/heartIconOrange.svg";
import ExpressVersand from "../../assets/Icon_Expressversand.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class={styles.root}>
            <Link to="/dashboard" class={styles.removeUnderline}>
                <img src={Logo} class={styles.logo} />
            </Link>
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
                            EXPRESSVERSAND IN DEUTSCHLAND
                        </h2>
                    </div>
                    <h2></h2>
                </div>
            </div>
            {/* Second Nav Row */}
            <div class={styles.secondRow}>
                <div class={styles.navContainer}>
                    <Link to="/" class={styles.removeUnderline}>
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
                    </Link>

                    <Link to="/menus" class={styles.removeUnderline}>
                        <div>
                            <h2>UNSERE MENÜS</h2>
                        </div>
                    </Link>
                    <Link to="/menus" class={styles.removeUnderline}>
                        <div>
                            <h2>LIEFERSERVICE</h2>
                        </div>
                    </Link>
                    <Link to="/faq" class={styles.removeUnderline}>
                        <div>
                            <h2>FAQ</h2>
                        </div>
                    </Link>
                    <div>
                        <h2>KONTAKT</h2>
                    </div>
                    <Link to="/login" class={styles.removeUnderline}>
                        <div>
                            <h2>ANMELDEN</h2>
                        </div>
                    </Link>
                    <Link to="/signup" class={styles.removeUnderline}>
                        <div>
                            <h2>REGISTRIEREN</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
