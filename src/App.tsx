import React from 'react'
import { UserList } from './components/UserList/UserList'

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h2>友達リクエストの送信先を選択してください</h2>
      <UserList />
      <div style={{ marginTop: 24 }}>
        <button type="submit">送信</button>
      </div>
    </div>
  )
}

export default App
