
export type DomainAuthor = {
  loginname: string
  avatarUrl: string
}

export type DomainTopics = {
  id: string
  authorId: string
  tab: string
  title: string
  good: boolean
  top: boolean
  replyCount: number
  visitCount: number
  createAt: string
  author: DomainAuthor 
}