import { UserList } from '../UserList/UserList'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>友達リクエストの送信先を選択してください</h2>

      <UserList />

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>
          送信
        </button>
      </div>
    </div>
  )
}

export default App
