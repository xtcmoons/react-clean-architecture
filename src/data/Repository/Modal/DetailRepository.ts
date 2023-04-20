import { RepositoryAuthor } from "./TopcisRepository"

export type Replies = {
  id: string
  author: RepositoryAuthor
  content: string
  create_at: string
  is_uped: boolean
}

export type Detail = {
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
  author: RepositoryAuthor 
  replies: Replies[]
  is_collect: boolean
}