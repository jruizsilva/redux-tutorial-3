import { useAppSelector } from 'app/hooks'
import { selectAllUsers } from 'features/users/usersSlice'

interface Props {
  authorId?: string
}

export const PostAuthor = ({ authorId }: Props) => {
  const users = useAppSelector(selectAllUsers)
  const author = users.find((user) => user.id === authorId)

  return <span>by {author != null ? author.name : 'Unknown author'}</span>
}
