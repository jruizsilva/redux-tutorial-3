import { sub } from 'date-fns'
import {
  INITIAL_REACTIONS,
  type Post,
  type PostData
} from 'features/posts/postsSlice'

export const fetchPostsAdapter = (posts: PostData[]): Post[] => {
  let min = 1
  return posts.map(({ id, title, body, userId }) => {
    return {
      id: id.toString(),
      title,
      body,
      authorId: userId.toString(),
      date: sub(new Date(), { minutes: min++ }).toISOString(),
      reactions: INITIAL_REACTIONS
    }
  })
}
