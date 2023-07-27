import { NextApiRequest, NextApiResponse } from "next"

import { userPosts } from "../../../../../in-memory-database/user-posts"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postsLength = userPosts.length

  if (req.method === "GET") {
    res.setHeader("x-total-length", postsLength)
    res.json(userPosts)
  } else {
    res.status(405).json({
      code: "invalid.method",
      message: "Method not allowed",
    })
  }
}
