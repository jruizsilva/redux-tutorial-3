import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useState, type ChangeEvent } from 'react'
import { type PrepareAddPostProps, type Status } from './postsSlice'
import { selectAllUsers, type User } from 'features/users/usersSlice'
import { addNewPost } from './postsSlice'

const INITIAL_STATE: PrepareAddPostProps = {
  title: '',
  body: '',
  authorId: ''
}

export const AddPostForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const { body, title, authorId } = formValues
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectAllUsers)
  const [addRequestData, setAddRequestData] = useState<Status>('idle')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const canSave =
    [title, body, authorId].every(Boolean) && addRequestData === 'idle'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (canSave) {
      try {
        setAddRequestData('loading')
        dispatch(addNewPost({ body, title, userId: Number(authorId) }))
        setFormValues(INITIAL_STATE)
      } catch (error) {
        console.log(error)
      } finally {
        setAddRequestData('idle')
      }
    }
  }

  const authorOptions = users.map(({ id, name }: User) => {
    return (
      <option value={id} key={id}>
        {name}
      </option>
    )
  })

  return (
    <div>
      <h2>Add new post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Post Title: </label>
        <input
          type='text'
          id='postTitle'
          name='title'
          value={title}
          onChange={handleChange}
        />
        <label htmlFor='authorId'>Author: </label>
        <select
          name='authorId'
          id='authorId'
          value={authorId}
          onChange={handleChange}
        >
          <option value=''>Select an author</option>
          {authorOptions}
        </select>
        <label htmlFor='postContent'>Post Content: </label>
        <input
          type='text'
          id='postContent'
          name='body'
          value={body}
          onChange={handleChange}
        />

        <button type='submit' disabled={!canSave}>
          Add Post
        </button>
      </form>
    </div>
  )
}
