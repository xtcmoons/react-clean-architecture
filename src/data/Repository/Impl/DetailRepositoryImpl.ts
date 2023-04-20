import { Detail } from "../../../model/Detail";
import { DetailNetworkDataSource } from "../../DataSource/DetailNetworkDataSource";
import { DetailRepository } from "../DetailRepository";

export class DetailRepositoryImpl implements DetailRepository {
  detailNetworkDataSource: DetailNetworkDataSource;

  constructor(private dataSource: DetailNetworkDataSource) {
    this.detailNetworkDataSource = dataSource
  }

  async getDetail(id: string): Promise<Detail> {
    const detail = await this.detailNetworkDataSource.getDetail(id);
    return detail;
  }
}