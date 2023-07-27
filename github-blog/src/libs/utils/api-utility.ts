import { formatDistanceToNow } from 'date-fns'
import { Post } from '../@types/api'
import { clientApi } from '../services/api'

const defaultRepo = 'Nyyu/react-ignite-2022'

export const getPosts = async (query?: string) => {
  if (query?.length) {
    const encodedQuery = encodeURIComponent(query)
    const url = `/search/issues?q=${encodedQuery}%20repo:${defaultRepo}`

    const response = await clientApi.get(url)
    const formattedData = response.data.items?.map((post: Post) => ({
      ...post,
      formatted_time: formatDistanceToNow(new Date(post.created_at), {
        addSuffix: true,
      }),
    }))

    return formattedData
  } else {
    const url = `/repos/${defaultRepo}/issues`

    const response = await clientApi.get(url)
    const formattedData = response.data.map((post: Post) => ({
      ...post,
      formatted_time: formatDistanceToNow(new Date(post.created_at), {
        addSuffix: true,
      }),
    }))

    return formattedData
  }
}

export const getPost = async (id: string) => {
  const url = `/repos/${defaultRepo}/issues/${id}`

  const response = await clientApi.get(url)
  const formattedData = {
    ...response.data,
    formatted_time: formatDistanceToNow(new Date(response.data.created_at), {
      addSuffix: true,
    }),
  }

  return formattedData
}

export const getProfile = async () => {
  const response = await clientApi.get(`/users/nyyu`)
  return response?.data
}
