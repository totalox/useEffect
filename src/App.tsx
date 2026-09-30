import Ruan from "./components/ruan/Ruan";
import Totalo from "./components/totalo/Totalo";
import styles from "./app.module.css"

export default function App() {
  return(
    <>
    <main className={styles.main}>
      <Totalo />
      <Ruan />
    </main>
    </>
  )
}