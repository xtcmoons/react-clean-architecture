import { NetworkDetail } from "../Model";

export interface DetailNetworkDataSource {
  getDetail(id: string): Promise<NetworkDetail>
}