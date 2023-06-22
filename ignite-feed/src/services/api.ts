import axios from "axios"

const baseURL = (process.env.APP_URL || "") + "/api"

export const api = axios.create({
  baseURL,
})

type clientOptions = {
  baseURL: string
  ctx?: unknown
}

// In case of I use nookies
export const CreateClientApi = (
  options: clientOptions = {
    baseURL,
  }
) => {
  return axios.create(options)
}
