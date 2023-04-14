import { Detail } from "../../model/Detail";


export interface DetailRepository {
  getDetail(id: string): Promise<Detail>
}