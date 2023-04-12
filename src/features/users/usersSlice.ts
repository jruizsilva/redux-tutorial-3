import {
  type PayloadAction,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import { type RootState } from 'app/store'
import axios from 'axios'
import { fetchUsersAdapter } from './fetchUsersAdapter'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export interface UserData {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
export interface User extends Omit<UserData, 'id'> {
  id: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

const INITIAL_STATE: User[] = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<UserData[]>(USERS_URL)
  return fetchUsersAdapter(response.data)
})

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchUsers.fulfilled,
      (_, action: PayloadAction<User[]>) => {
        return action.payload
      }
    )
  }
})

export const selectAllUsers = (store: RootState) => store.users

export default usersSlice
