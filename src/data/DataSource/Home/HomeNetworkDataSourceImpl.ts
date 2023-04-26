import request from "../../../network/Request/request";
import { NetworkTopics } from "../Model/Topcis";
import { Response } from "../../../model/Response";

export async function getList(
  page: number,
  tab: string,
  limit: number
): Promise<Response<NetworkTopics[]>> {
  return request({
    url: "/topics",
    method: "GET",
    params: {
      page,
      tab,
      limit,
    },
  });
}
