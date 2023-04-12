import { AddPostForm } from 'features/posts/AddPostForm'
import { PostsList } from 'features/posts/PostsList'

export const App = () => {
  return (
    <div>
      <PostsList />
      <AddPostForm />
    </div>
  )
}
