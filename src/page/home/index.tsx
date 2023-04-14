import { HomeRepositoryImpl } from "../../data/Repository/HomeRepositoryImpl";
import { HomeNetworkDataSourceImpl } from "../../network/DataSource/Home/HomeNetworkDataSourceImpl";
import { useHome } from "./hooks/useHome";
import { InfiniteScroll, List } from "antd-mobile";

const homeDataSource = new HomeNetworkDataSourceImpl() 
const homeRepository = new HomeRepositoryImpl(homeDataSource);

function Home() {
  const [list, hasMore, loadMore] = useHome(homeRepository);
  return (
    <>
      <List>
        {list.map((item) => {
          return <List.Item key={item.id}>{item.title}</List.Item>;
        })}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  );
}

export default Home;
