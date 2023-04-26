import { useHome } from "./hooks/useHome";
import { InfiniteScroll, List } from "antd-mobile";
import Cell from "./Cell";

function Home() {

  const [list, hasMore, loadMore] = useHome();

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
