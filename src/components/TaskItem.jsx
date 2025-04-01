/* eslint-disable react/prop-types */
import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import checked from '../assets/checked.svg'

import styles from './TaskItem.module.css'

export function TaskItem({ task, onToggleComplete, onDelete }) {
  if (!task) {
    return null
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskContent}>
        <button
          className={styles.checkButton}
          onClick={() => onToggleComplete(task.id)}
        >
          <img src={task.completed ? checked : check} alt="Marcar tarefa" />
        </button>
        <span className={task.completed ? styles.completed : ''}>
          {task.title}
        </span>
      </div>

    
      <button className={styles.trashButton} onClick={() => onDelete(task.id)}>
        <img src={trash} alt="Excluir tarefa" />
      </button>
    </div>
  )
}


