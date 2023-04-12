import React from 'react'
import ReactDOM from 'react-dom/client'
import 'index.css'
import { App } from 'App'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import { fetchUsers } from 'features/users/usersSlice'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
