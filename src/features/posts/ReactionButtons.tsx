import { useAppDispatch } from 'app/hooks'
import { addReaction, type Post } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😲',
  heart: '♥',
  rocket: '🚀',
  coffee: '☕'
}

interface Props {
  post: Post
}

export function ReactionButtons({ post }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([key, value]) => {
    return (
      <button
        key={key}
        className='reactionButton'
        onClick={() => {
          dispatch(addReaction({ postId: post.id, reaction: key }))
        }}
      >
        {value} {post.reactions[key]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}
