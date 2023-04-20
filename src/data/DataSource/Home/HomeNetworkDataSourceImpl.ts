import { HomeNetworkDataSource } from "../HomeNetworkDataSource";
import request from "../../../network/Request/request";
import { NetworkTopics } from "../Model/Topcis";

export class HomeNetworkDataSourceImpl implements HomeNetworkDataSource {

  async getList(page: number, tab: string, limit: number): Promise<{data: NetworkTopics[], success: boolean}> {
    return request({
      url: "/topics",
      method: "GET",
      params: {
        page,
        tab,
        limit
      }
    }) 
  }
}