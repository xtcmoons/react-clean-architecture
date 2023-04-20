import { RepositoryTopics } from "../../data/Repository/Modal/TopcisRepository"

export type HomeUiState = {
  topics: RepositoryTopics[]
  hasMore: boolean
}