import styles from './taskList.module.scss'

interface TaskListProps {
  done?: boolean
}

export default function TaskList(props: TaskListProps) {
  const { done } = props
  return (
    <div className='mb-2'>
      <h3 className={styles.title}>{done ? 'Finished' : 'Unfinised'}</h3>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Get groceries</span>
          <div className={styles.taskActions}>
            <button type='submit' className={styles.taskBtn}>
              🖊
            </button>
            <button type='submit' className={styles.taskBtn}>
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
