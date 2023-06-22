import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"

import { Button } from "../Primitives/Button"
import { Avatar } from "../User/Avatar"

export type TComment = {
  user: {
    name: string
    img?: string
  }
  date: string
  comment: string
  likes?: number
}

export interface CommentProps extends TComment {
  onDeleteComment: (comment: string) => void
}

export const Comment = ({
  comment,
  date,
  user: { name, img = "https://github.com/nyyu.png" },
  likes = 0,
  onDeleteComment,
}: CommentProps) => {
  const [commentLikes, setCommentLikes] = useState(likes)
  const formattedLikes = String(commentLikes).padStart(2, "0")

  const handleDeleteComment = () => {
    onDeleteComment(comment)
  }

  const handleUpdateLikes = () => setCommentLikes((prev) => prev + 1)

  return (
    <div className="flex gap-4">
      <Avatar
        src={img}
        alt="User profile picture"
        className="self-start"
        variant="no-border"
        h={50}
        w={50}
      />

      <div className="flex flex-col w-full">
        <div className="bg-gray-700 flex flex-col rounded-lg p-4 gap-4">
          <header className="flex justify-between  items-center">
            <div className="flex flex-col gap-1">
              <strong className="font-bold text-gray-100">{name}</strong>
              <time
                className="font-normal text-xs text-gray-400"
                dateTime="01-19-2023 08:32:43"
                title="Jan, 19th 2023"
              >
                {date}
              </time>
            </div>
            <Button
              title="Remove comment"
              variant="danger"
              className="self-start text-gray-400 px-0"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </Button>
          </header>
          <main className="mb-2">{comment}</main>
        </div>
        <footer className="mt-4">
          <Button
            variant="ghost"
            title="Remove comment"
            className=" text-gray-400 px-2 gap-2"
            onClick={handleUpdateLikes}
          >
            <ThumbsUp /> Like <span className="bullet">{formattedLikes}</span>
          </Button>
        </footer>
      </div>
    </div>
  )
}
