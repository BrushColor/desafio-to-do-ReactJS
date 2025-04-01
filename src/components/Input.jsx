import styles from "./Input.module.css"

// eslint-disable-next-line react/prop-types
export function Input({ value, onChange, onKeyDown }) {
  return (
    <input
      type="text"
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}