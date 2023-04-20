import { RepositoryTopics } from "./Modal/TopcisRepository";


export interface HomeRepository {
  getList(page: number, tab: string, limit: number): Promise<RepositoryTopics[]>
}