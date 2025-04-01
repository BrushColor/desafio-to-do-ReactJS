import { useState } from 'react'
import styles from './TaskList.module.css'
import clipboard from '../assets/clipboard.svg'
import { TaskItem } from './TaskItem'
import { Input } from './Input'
import { Button } from './Button'

export function TaskList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function handleAddTask() {
    if (newTask.trim() === '') return

    const newTaskObject = {
      id: crypto.randomUUID(),
      title: newTask,
      completed: false,
    }

    setTasks([...tasks, newTaskObject])
    setNewTask('')
  }

  function handleToggleComplete(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.addTasks}>
        <Input
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleAddTask} />
      </div>

      <div className={styles.taskCounter}>
        <p>
          Tarefas criadas: <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas:{' '}
          <span>{tasks.filter((task) => task.completed).length}</span>
        </p>
      </div>

      {tasks.length ===  0 && <div className={styles.divider}></div>}

      {tasks.length === 0 ? (
        <div className={styles.emptyState}>
          <img src={clipboard} alt="Nenhuma tarefa" />
          <span>Você ainda não tem tarefas cadastradas</span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
