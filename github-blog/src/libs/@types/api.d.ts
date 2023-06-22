export type Post = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  labels: any[] // You can define a specific type for labels if needed
  state: string
  locked: boolean
  assignee: null | any // You can define a specific type for assignee if needed
  assignees: any[] // You can define a specific type for assignees if needed
  milestone: null | any // You can define a specific type for milestone if needed
  comments: number
  created_at: string
  updated_at: string
  closed_at: null | string
  author_association: string
  active_lock_reason: null | string
  body: string
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: null | any // You can define a specific type for performed_via_github_app if needed
  state_reason: null | any // You can define a specific type for state_reason if needed
}
