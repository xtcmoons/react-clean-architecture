import { NetworkDetail } from "../../Model/Detail";
import request from "../../Request/request";
import { DetailNetworkDataSource } from "../DetailNetworkDataSource";

export class DetailNetworkDataSourceImpl implements DetailNetworkDataSource {
  async getDetail(id: string): Promise<NetworkDetail> {
    return request({
      url: `/topic/${id}`,
      method: "GET"
    })
  }
}