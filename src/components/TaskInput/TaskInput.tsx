import { useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../TodoList/TodoList'

interface TaskInputProps {
  addTodo: (name: string) => void,
  editingItem?: Todo
}

function TaskInput(props: TaskInputProps) {
  const { addTodo, editingItem } = props
  console.log(editingItem?.name)
  const [name, setName] = useState<string>(editingItem?.name ?? '')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!name || name.trim() === '') return
    addTodo(name)
    setName('')
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName(value)
  }

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>TodoList with Typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={onChangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput
