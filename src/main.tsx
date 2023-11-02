import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

import { FriendRequestForm } from '@/components/models/FriendRequestForm/FriendRequestForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FriendRequestForm />
  </React.StrictMode>,
)
