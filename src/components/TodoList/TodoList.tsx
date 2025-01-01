import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export interface Todo {
  name: string
  done: boolean
  id: string
  isEditing?: boolean
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const editingItem = todos.find((todo) => todo.isEditing)

  const addAndEditTodo = (name: string) => {
    if(editingItem) {
      setTodos(prev => {
        return prev.map(todo => {
          if(todo.id === editingItem.id) {
            return { ...todo, name, isEditing: false }
          }
          return todo
      })})
      return
    }
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

  const handleEditBtnClick= (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true }
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
        <TaskInput addTodo={addAndEditTodo} key={editingItem?.id} editingItem={editingItem}/>
        <TaskList todos={unfinished} handleChecked={handleChecked} onEdit={handleEditBtnClick}/>
        <TaskList done todos={finished} handleChecked={handleChecked}  onEdit={handleEditBtnClick} />
      </div>
    </div>
  )
}

export default TodoList
