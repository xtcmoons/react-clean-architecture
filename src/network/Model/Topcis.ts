
export type NetworkAuthor = {
  loginname: string
  avatar_url: string
}

export type NetworkTopics = {
  id: string
  author_id: string
  tab: string
  content: string
  title: string
  last_reply_at: string
  good: boolean
  top: boolean
  reply_count: number
  visit_count: number
  create_at: string
  author: NetworkAuthor 
}