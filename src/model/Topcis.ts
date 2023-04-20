
export type Author = {
  loginname: string
  avatarUrl: string
}

export type Topics = {
  id: string
  tab: string
  title: string
  good: boolean
  top: boolean
  replyCount: number
  visitCount: number
  createAt: string
  author: Author 
}