import dayjs from "dayjs"
import { v4 as uuid } from "uuid"

import type { PostProps } from "../src/components/Post"
import { CommentProps } from "../src/components/Post/Comment"

export const userPosts: PostProps[] = [
  {
    id: "f6b89535-df27-45ce-991a-a5679dd53335",
    author: {
      name: "Nyyu",
      role: "Web developer",
      avatarUrl: "https://github.com/Nyyu.png",
    },
    content: [
      {
        type: "text",
        data: "Hey guys 👋",
      },
      {
        type: "text",
        data: "Im Karen and Ive been working on an AI project called Karen Bot, it basically consists of a bot complaining 24/7 without stopping a single fraction of time. Good luck dealing with that! Love y'all",
      },
      {
        type: "anchor",
        data: "karenAiBot.dev/documentation",
      },
    ],
    hashtags: ["AI", "developer"],
    publishedAt: dayjs().subtract(2, "h").toDate(),
  },
  {
    id: "b7b7d131-b2b1-4d21-92b1-ac593eadcefe",
    author: {
      name: "Nyuu",
      role: "Web developer",
      avatarUrl: "https://github.com/nyuu.png",
    },
    content: [
      {
        type: "text",
        data: "Heyoo 👋",
      },
      {
        type: "text",
        data: "Im John Doe and Ive been working on an something sth...",
      },
      {
        type: "anchor",
        data: "sth.dev/documentation",
      },
    ],
    hashtags: ["web", "developer"],
    publishedAt: dayjs().subtract(4, "h").toDate(),
  },
]

export const postComments: any = {
  "b7b7d131-b2b1-4d21-92b1-ac593eadcefe": [
    {
      comment: "Poggers that looks sick, just like my neighbors",
      date: dayjs().subtract(1, "h").toDate(),
      user: {
        name: "Nyyu",
      },
      likes: 6,
    },
  ] as any[],
  "f6b89535-df27-45ce-991a-a5679dd53335": [
    {
      comment: "Poggers",
      date: dayjs().subtract(4, "h").toDate(),
      user: {
        name: "Nu",
      },
      likes: 26,
    },
    {
      comment: "Poggers, just like my neighbors",
      date: dayjs().subtract(2, "h").toDate(),
      user: {
        name: "Nyu",
      },
      likes: 3,
    },
  ] as any[],
}
