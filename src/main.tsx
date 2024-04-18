import React from 'react'
import ReactDOM from 'react-dom/client'

import 'ress'

import { FriendRequestForm } from 'src/components/FriendRequestForm/FriendRequestForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FriendRequestForm />
  </React.StrictMode>,
)
