import { Author } from "./Topcis"

export type Replies = {
  id: string
  author: Author
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
  author: Author 
  replies: Replies[]
  is_collect: boolean
}