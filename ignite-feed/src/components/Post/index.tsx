import { useEffect, useRef, useState } from "react"

import dayjs from "dayjs"
import { v4 as uuid } from "uuid"

import { api } from "../../services/api"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "../Primitives/Button"
import { Input } from "../Primitives/Input"
import { Avatar } from "../User/Avatar"
import { Comment, CommentProps, TComment } from "./Comment"

const commentSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(3, "Min content length is 3 characters")
    .max(255, "Max content length is 255 characters"),
})

export interface PostProps {
  id: string
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: { type: "text" | "anchor"; data: string }[]
  hashtags?: string[]
  publishedAt: Date
}

type FormProps = { comment: string }

export const Post = ({
  id,
  author: { name, role, avatarUrl },
  content,
  hashtags = [],
  publishedAt,
}: PostProps) => {
  const [comments, setComments] = useState<TComment[]>([])
  const isMounted = useRef(true)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(commentSchema),
  })

  const isCommentInputEmpty = watch("comment")?.length === 0

  // Initial data
  useEffect(() => {
    const handleGetComments = async () => {
      const response = await api.get<CommentProps[]>(
        `/users/posts/comments/${id}`
      )

      if (response) {
        const comments = response.data?.map((comment) => ({
          ...comment,
          date: dayjs().to(dayjs(comment.date)),
        }))

        setComments(comments)
      }
    }

    if (isMounted) handleGetComments()

    return () => {
      isMounted.current = false
    }
  }, [id])

  // Kinda useless here as I don't have an actual api, but a good example
  // const { data, isLoading, isFetching, isError } = useQuery<CommentProps[]>({
  //   queryKey: ["comments", id],
  //   initialData: [],
  //   queryFn: async () => {
  //     const response = await api.get<CommentProps[]>(
  //       `/users/posts/comments/${id}`
  //     )

  //     const comments = response.data?.map((comment) => ({
  //       ...comment,
  //       date: dayjs().to(dayjs(publishedAt)),
  //     }))

  //     return comments
  //   },
  // })

  const handleAddComment: SubmitHandler<FormProps> = async (data) => {
    const formattedData: TComment = {
      ...data,
      date: dayjs().to(dayjs()), // idiotic example
      user: { name: "example" },
      likes: 0,
    }

    setComments((prev) => [...prev, formattedData])
  }

  const deleteComment = async (comment: string) => {
    setComments((prev) => prev.filter((data) => data.comment !== comment))
  }

  const dateDifferenceFromNowWithSuffix = dayjs().to(dayjs(publishedAt))
  const ISOFormattedDate = new Date(publishedAt).toISOString()
  const formattedDate = dayjs(publishedAt).format("MMM[,] DD[/]YYYY [at] ha")

  return (
    <article className="bg-gray-800 p-10 rounded-lg [&:not(:last-child)]:mb-8">
      <header className="flex justify-between">
        <div className="flex gap-5">
          <Avatar src={avatarUrl} alt="User avatar" w={50} h={50} />
          <div className="flex flex-col">
            <strong className="font-bold text-gray-100">{name}</strong>
            <span className="text-gray-400 text-sm">{role}</span>
          </div>
        </div>

        <time
          title={formattedDate}
          dateTime={ISOFormattedDate}
          className="text-gray-400 text-sm"
        >
          {dateDifferenceFromNowWithSuffix}
        </time>
      </header>
      <main className="flex flex-col gap-6 mt-6 font-normal text-base text-gray-300">
        {content.map((shard) =>
          shard.type === "text" ? (
            <p key={uuid()}>{shard.data}</p>
          ) : (
            <a href="#" key={uuid()}>
              {shard.data}
            </a>
          )
        )}

        <div className="flex gap-2">
          {hashtags.map((hashtag) => (
            <a href="#" key={uuid()}>
              #{hashtag}
            </a>
          ))}
        </div>
      </main>
      <hr className="border-0 border-t border-gray-600 my-6" />
      <form
        className="flex flex-col gap-4 group"
        onSubmit={handleSubmit(handleAddComment)}
      >
        <strong className="font-bold">
          Leave your feedback{" "}
          <span className="text-xs opacity-50">
            {!!(errors && errors.comment) && `(${errors.comment?.message})`}
          </span>
        </strong>
        <Input
          placeholder="ie. It looks awesome"
          className="resize-none"
          {...register("comment")}
        />
        <Button
          type="submit"
          disabled={isCommentInputEmpty}
          className="max-w-[6.75rem] invisible max-h-0 group-focus-within:visible group-focus-within:max-h-[none] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Publish
        </Button>
      </form>

      <div className="mt-8 flex flex-col gap-6">
        {comments.map((commentData) => (
          <Comment
            key={uuid()}
            comment={commentData.comment}
            date={commentData.date}
            user={commentData.user}
            likes={commentData.likes}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
