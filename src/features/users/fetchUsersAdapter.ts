import { type User, type UserData } from './usersSlice'

export const fetchUsersAdapter = (users: UserData[]): User[] => {
  return users.map((user) => {
    return { ...user, id: user.id.toString() }
  })
}
