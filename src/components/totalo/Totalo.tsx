
import { useState, useEffect } from "react";
import styles from "./totalo.module.css";
export default function Totalo() {

    const [switchMode, setSwitchMode] = useState(() => {
        return localStorage.getItem("valor") || "dark"
    })

    useEffect(() => {
        localStorage.setItem("valor", switchMode)
    }, [switchMode])

    return (        
        <>
        <main className={(switchMode === "light") ? styles.main : styles.main2}>
            <button className={styles.botao} onClick={() => setSwitchMode(switchMode === "dark" ? "light" : "dark")}>Clique</button>
            <h1>{switchMode}</h1>
        </main>
        </>
    )
}