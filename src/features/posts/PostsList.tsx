import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts
} from './postsSlice'
import { useEffect } from 'react'
import { PostsExcerpt } from './PostsExcerpt'

export const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)
  const dispatch = useAppDispatch()
  const status = useAppSelector(getPostsStatus)
  const error = useAppSelector(getPostsError)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status])

  let content
  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => {
      return <PostsExcerpt key={post.id} post={post} />
    })
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  )
}
