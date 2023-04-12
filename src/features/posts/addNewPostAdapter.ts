import { INITIAL_REACTIONS, type Post, type PostData } from './postsSlice'

export const addNewPostAdapter = (post: PostData): Post => {
  const { id, userId } = post
  return {
    ...post,
    id: id.toString(),
    authorId: userId.toString(),
    reactions: INITIAL_REACTIONS,
    date: new Date().toISOString()
  }
}
