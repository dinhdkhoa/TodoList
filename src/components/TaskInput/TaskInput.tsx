import styles from './taskInput.module.scss'

function TaskInput() {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>TodoList with Typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='captaion goes here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput
