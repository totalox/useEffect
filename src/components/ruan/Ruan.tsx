import styles from "./ruan.module.css";
import { useState, useEffect } from "react";
export default function Ruan(){
    localStorage.getItem("valordotema")
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("valordotema") || "light"
    })

    useEffect(() =>{
        localStorage.setItem("valordotema", theme)
    }, [theme])

    return(
    <>
    <main className={(theme === "light") ? styles.mainlight : styles.maindark}>
        <button className={styles.botao} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Meclica</button>
        <h1>{theme}</h1>
    </main>
    </>
    )
}