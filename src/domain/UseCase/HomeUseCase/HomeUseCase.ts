import { HomeRepository } from "../../../data/Repository/HomeRepository";
import { RepositoryTopics } from "../../../data/Repository/Modal/TopcisRepository";


export class HomeUseCase {
  private repository: HomeRepository;
  constructor(private homeRepository: HomeRepository) {
    this.repository = homeRepository;
  }

  async getList(page: number, tab: string, limit: number): Promise<RepositoryTopics[]> {
    const result = await this.repository.getList(page, tab, limit);
    return result;
  }
}