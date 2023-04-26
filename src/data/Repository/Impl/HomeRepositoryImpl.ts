import { RepositoryTopics } from "../Modal/TopcisRepository";
import { getList as getListDataSource } from "../../DataSource/Home/HomeNetworkDataSourceImpl"
import dayjs from "dayjs";

export async function getListRepository(page: number, tab: string, limit: number): Promise<RepositoryTopics[]> {
  try {
    const {data, success} = await getListDataSource(page, tab, limit);
    // 业务异常
    if (!success) {
      return [];
    }
    // 处理数据, 
    const res = data.map((item: any) => {
      const temp: RepositoryTopics = {
        id: item.id,
        tab: item.tab,
        title: item.title,
        good: item.good,
        top: item.top,
        replyCount: item.reply_count,
        visitCount: item.visit_count,
        createAt: dayjs(item.create_at).format('YYYY-MM-DD HH:mm:ss'),
        author: {
          loginname: item.author.loginname,
          avatarUrl: item.author.avatar_url
        }
      }
      return temp;
    })
    return res
  } catch (error) {
    // 接口异常处理，比如网络异常，超时等，直接往上层抛出异常
    throw error;
  }
}