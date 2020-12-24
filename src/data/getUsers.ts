import { users } from './users'

export const getUsers = async () => new Promise((resolve) => setTimeout(() => resolve(users), 1000))
