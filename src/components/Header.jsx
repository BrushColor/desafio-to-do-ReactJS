import styles from "./Header.module.css"
import logo from "../assets/logo.png"

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logomarca" />
    </header>
  )
}