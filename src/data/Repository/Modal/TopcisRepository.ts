
export type RepositoryAuthor = {
  loginname: string
  avatarUrl: string
}

export type RepositoryTopics = {
  id: string
  tab: string
  title: string
  good: boolean
  top: boolean
  replyCount: number
  visitCount: number
  createAt: string
  author: RepositoryAuthor 
}