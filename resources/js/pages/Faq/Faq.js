import React, { useEffect, useState } from "react";
import Header from "../../assets/Header_FAQ.jpg";
import styles from "./Faq.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Faq = () => {
    const [active, setActive] = useState(1);

    useEffect(() => {
        setActive(1);
    }, []);

    return (
        <div class={styles.root}>
            <div
                class={styles.bgImage}
                style={{
                    backgroundImage: `url("${Header}")`,
                }}
            ></div>
            <div class={styles.container}>
                <h2 class={`${styles.text} ${styles.font}`}>
                    WICHTIG ZU WISSEN.
                </h2>
                <h2 class={`${styles.title} ${styles.font}`}>
                    ANTWORTEN AUF VIELE FRAGEN.
                </h2>
                <h4
                    class={`${styles.description} ${styles.font}`}
                    style={{ width: "80%" }}
                >
                    Occum aut quatemquo quia num int officat empostrum quidem
                    venihic iandaer namenis estrum quodis dolore sumquaectur
                    anditat emporitatet ipsum dolup- taquo temquis exerovit
                    laborep udaecti incient voluptius escil incia vene pro
                    omnistiae dolorerrum et laut dolorestrum as que voluptatur
                    aut atiaept iberum etus sum sunt lit el molorecae. Latiam
                    audisque voluptae volum faccum laut et ium que nient volupta
                    tumene nemporum labor repedis es et ma vel et eturissint
                    ducit etur autam rem int re parciatquis est volesedipsam non
                    commoluptat vel molupit laut qui quaerchil molum, sus
                    aliaturis ea dolupta volut et accum reici- maxim qui
                    ditioritas demoluptat
                </h4>
            </div>
            <div class={styles.faq}>
                {active === 1 ? (
                    <div
                        onClick={() => setActive()}
                        class={styles.questionContainer}
                        style={{ marginBottom: 8 }}
                    >
                        <MdOutlineKeyboardArrowDown size={25} color={"#000"} />
                        <h2 class={`${styles.question} ${styles.font}`}>
                            FRAGE 01
                        </h2>
                    </div>
                ) : (
                    <div
                        onClick={() => setActive(1)}
                        class={styles.questionContainer}
                        style={{ marginBottom: 12 }}
                    >
                        <IoIosArrowForward size={20} color={"#000"} />
                        <h2 class={`${styles.question} ${styles.font}`}>
                            FRAGE 01
                        </h2>
                    </div>
                )}
                {active === 1 && (
                    <div class={styles.answerContainer}>
                        <h2 class={`${styles.answer} ${styles.font}`}>
                            As sunti consequ iaerion sequae aut erchil estrum
                            aturessi dollabo. Axim hiliqui busdaec estrunt
                            exerore pudanis sum facepro videre pro Nam
                        </h2>
                    </div>
                )}
                <hr style={{ width: "100%", marginLeft: 100 }} />
            </div>
            <div class={styles.faq}>
                {active === 2 ? (
                    <div
                        onClick={() => setActive()}
                        class={styles.questionContainer}
                        style={{ marginBottom: 8 }}
                    >
                        <MdOutlineKeyboardArrowDown size={25} color={"#000"} />
                        <h2 class={`${styles.question} ${styles.font}`}>
                            FRAGE 02
                        </h2>
                    </div>
                ) : (
                    <div
                        onClick={() => setActive(2)}
                        class={styles.questionContainer}
                        style={{ marginBottom: 12 }}
                    >
                        <IoIosArrowForward size={20} color={"#000"} />
                        <h2 class={`${styles.question} ${styles.font}`}>
                            FRAGE 02
                        </h2>
                    </div>
                )}
                {active === 2 && (
                    <div class={styles.answerContainer}>
                        <h2 class={`${styles.answer} ${styles.font}`}>
                            As sunti consequ iaerion sequae aut erchil estrum
                            aturessi dollabo. Axim hiliqui busdaec estrunt
                            exerore pudanis sum facepro videre pro Nam
                        </h2>
                    </div>
                )}
                <hr style={{ width: "100%", marginLeft: 100 }} />
            </div>
        </div>
    );
};

export default Faq;
