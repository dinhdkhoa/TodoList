import { Todo } from '../TodoList/TodoList'
import styles from './taskList.module.scss'

interface TaskListProps {
  done?: boolean
  todos: Todo[]
  handleChecked: (id: string, done: boolean) => void,
  onEdit: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { done, todos, handleChecked, onEdit } = props

  const onChangeChecked = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChecked(id, e.target.checked)
  }

  return (
    <div className='mb-2'>
      <h3 className={styles.title}>{done ? 'Finished' : 'Unfinised'}</h3>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              // onChange={(e) => handleChecked(todo.id, e.target.checked)}
              onChange={onChangeChecked(todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done && styles.taskNameDone}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button type='button' className={styles.taskBtn} onClick={() => onEdit(todo.id)}>
                🖊
              </button>
              <button type='submit' className={styles.taskBtn}>
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
