import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export interface Todo {
  name: string
  done: boolean
  id: string
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (name: string) => {
    const todo: Todo = {
      done: false,
      name,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleChecked = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const unfinished = todos.filter((todo) => !todo.done)
  const finished = todos.filter((todo) => todo.done)

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList todos={unfinished} handleChecked={handleChecked} />
        <TaskList done todos={finished} handleChecked={handleChecked} />
      </div>
    </div>
  )
}

export default TodoList
