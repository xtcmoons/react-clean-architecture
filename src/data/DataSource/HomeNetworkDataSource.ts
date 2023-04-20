import { NetworkTopics } from "./Model";


export interface HomeNetworkDataSource {
  getList(page: number, tab: string, limit: number): Promise<{data: NetworkTopics[], success: boolean}>
}