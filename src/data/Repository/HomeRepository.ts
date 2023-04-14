import { Topics } from "../../model/Topcis";


export interface HomeRepository {
  getList(page: number, tab: string, limit: number): Promise<{data: Topics[]}>
}