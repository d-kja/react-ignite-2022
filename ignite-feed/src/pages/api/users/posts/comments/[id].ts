import { NextApiRequest, NextApiResponse } from "next"

import { postComments } from "../../../../../../in-memory-database/user-posts"
import { CommentProps } from "../../../../../components/Post/Comment"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req

  if (method === "GET") {
    const id = query.id as string

    const publicationComments = postComments[id] as CommentProps[]
    res.json(publicationComments)
  } else {
    res.status(405).json({
      code: "invalid.method",
      message: "Method not allowed",
    })
  }
}
