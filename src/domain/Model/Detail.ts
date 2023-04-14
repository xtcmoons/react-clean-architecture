import { DomainAuthor } from "./Topcis"

export type DomainReplies = {
  id: string
  author: DomainAuthor 
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
  author: DomainAuthor 
  replies: DomainReplies[]
  is_collect: boolean
}