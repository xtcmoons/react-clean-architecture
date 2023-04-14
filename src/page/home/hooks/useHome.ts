import { useEffect, useRef, useState } from "react";
import { Topics } from "../../../model/Topcis";
import { HomeRepository } from "../../../data/Repository/HomeRepository";
import { Immer } from "immer";

export function useHome(
  homeRepository: HomeRepository
): [list: Topics[], hasMore: boolean, loadMore: () => Promise<void>] {
  const [list, setList] = useState<Topics[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const pageRef = useRef(1);

  useEffect(() => {
    const init = async () => {
      const { data } = await homeRepository.getList(pageRef.current, "all", 20);
      debugger
      setList(data);
      if (data.length < 20) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    };
    init();
  }, []);

  const loadMore = async () => {
    pageRef.current = pageRef.current + 1;
    const { data } = await homeRepository.getList(pageRef.current, "all", 20);
    debugger
    setList(preState => preState.concat(data))
    debugger
    if (data.length < 20) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  };

  return [list, hasMore, loadMore];
}
