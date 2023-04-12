import { formatDistanceToNow, parseISO } from 'date-fns'

interface Props {
  timestamp: string
}

export function TimeAgo({ timestamp }: Props) {
  let timeAgo = ''
  if (timestamp != null) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <>
      <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
      </span>
    </>
  )
}
