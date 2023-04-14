import { NetworkAuthor } from "./Topcis"

export type NetworkReplies = {
  id: string
  author: NetworkAuthor
  content: string
  create_at: string
  is_uped: boolean
}

export type NetworkDetail = {
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
  replies: NetworkReplies[]
  is_collect: boolean
}