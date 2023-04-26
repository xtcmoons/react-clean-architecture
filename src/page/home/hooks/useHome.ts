import { useEffect, useRef, useState } from "react";
import { produce } from "immer";
import { HomeUiState } from "../interface";
import { RepositoryTopics } from "../../../data/Repository/Modal/TopcisRepository";
import { getListUseCase } from "../../../domain/UseCase/HomeUseCase/HomeUseCase";

export function useHome(): [
  list: RepositoryTopics[],
  hasMore: boolean,
  loadMore: () => Promise<void>
] {
  const [homeUiState, setHomeUiState] = useState<HomeUiState>({
    topics: [],
    hasMore: true,
  });

  const pageRef = useRef(0);

  const loadMore = async () => {
    pageRef.current = pageRef.current + 1;
    const list = await getListUseCase(pageRef.current, "all", 20);

    setHomeUiState(
      produce((draft) => {
        draft.topics = draft.topics.concat(list);
        if (list.length < 20) {
          draft.hasMore = false;
        } else {
          draft.hasMore = true;
        }
      })
    );
  };

  return [homeUiState.topics, homeUiState.hasMore, loadMore];
}
