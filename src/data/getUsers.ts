import { User } from '@/models/user/type'
import { users } from './users'

export const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const _users: User[] = users.map((user) => {
        return {
          ...user,
          id: user.id as Id<'User'>,
        }
      })

      resolve(_users)
    }, 1000)
  })
}
