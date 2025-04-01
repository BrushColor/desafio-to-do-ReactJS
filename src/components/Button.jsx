import styles from './Button.module.css'

import plus from '../assets/plus.svg'

// eslint-disable-next-line react/prop-types
export function Button({ onClick }) {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      Criar
      <img src={plus} alt="icone de mais" />
    </button>
  )
}
