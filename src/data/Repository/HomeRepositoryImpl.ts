import { Topics } from "../../model/Topcis";
import { HomeNetworkDataSource } from "../../network/DataSource/HomeNetworkDataSource";
import type { HomeRepository } from "./HomeRepository";


export class HomeRepositoryImpl implements HomeRepository {

  homeNetworkDataSource: HomeNetworkDataSource;

  constructor(private dataSource: HomeNetworkDataSource) {
    this.homeNetworkDataSource = dataSource;
  }

  getList(page: number, tab: string, limit: number): Promise<{data: Topics[]}> {
    return this.homeNetworkDataSource.getList(page, tab, limit);
  }
}