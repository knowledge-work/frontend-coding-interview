import { UserList } from '../UserList/UserList'

import styles from './FriendRequestForm.module.scss'

const FriendRequestForm = () => {
  return (
    <form className={styles.wrapper}>
      <h2 className={styles.header}>友達リクエストの送信先を選択してください</h2>

      <UserList />

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>
          送信
        </button>
      </div>
    </form>
  )
}

export { FriendRequestForm }
