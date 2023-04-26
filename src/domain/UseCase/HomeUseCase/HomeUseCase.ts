import { getListRepository } from "../../../data/Repository/Impl/HomeRepositoryImpl";
import { RepositoryTopics } from "../../../data/Repository/Modal/TopcisRepository";

export async function getListUseCase(
  page: number,
  tab: string,
  limit: number
): Promise<RepositoryTopics[]> {
  const result = await getListRepository(page, tab, limit);
  return result;
}
