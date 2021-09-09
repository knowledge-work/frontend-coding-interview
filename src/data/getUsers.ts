import { users } from './users'

export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 1000)
  })
}
