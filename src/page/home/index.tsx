import { HomeRepositoryImpl } from "../../data/Repository/Impl/HomeRepositoryImpl";
import { HomeNetworkDataSourceImpl } from "../../data/DataSource/Home/HomeNetworkDataSourceImpl";
import { useHome } from "./hooks/useHome";
import { InfiniteScroll, List } from "antd-mobile";
import Cell from "./Cell";
import { HomeUseCase } from "../../domain/UseCase/HomeUseCase/HomeUseCase";

const homeDataSource = new HomeNetworkDataSourceImpl() 
const homeRepository = new HomeRepositoryImpl(homeDataSource);
const homeUseCase = new HomeUseCase(homeRepository);

function Home() {
  const [list, hasMore, loadMore] = useHome(homeUseCase);
  return (
    <>
      <List>
        {list.map((item) => {
          return <List.Item key={item.id}>
            <Cell
            avatarUrl={item.author.avatarUrl}
            title={item.title}
            createAt={item.createAt}
            />
          </List.Item>;
        })}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  );
}

export default Home;
