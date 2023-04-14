import { HomeNetworkDataSource } from "../HomeNetworkDataSource";
import request from "../../Request/request";
import { NetworkTopics } from "../../Model/Topcis";

export class HomeNetworkDataSourceImpl implements HomeNetworkDataSource {

  async getList(page: number, tab: string, limit: number): Promise<{data: NetworkTopics[]}> {
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