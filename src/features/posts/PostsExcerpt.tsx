import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { type Post } from './postsSlice'

interface Props {
  post: Post
}

export function PostsExcerpt({ post }: Props) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor authorId={post.authorId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}
