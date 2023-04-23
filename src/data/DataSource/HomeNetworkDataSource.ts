import { Response } from "../../model/Response";
import { NetworkTopics } from "./Model";


export interface HomeNetworkDataSource {
  getList(page: number, tab: string, limit: number): Promise<Response<NetworkTopics[]>>
}