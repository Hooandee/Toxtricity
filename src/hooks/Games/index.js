import { useCallback, useContext } from "react";

import { EShopContext } from "../index.reducer";

import {
  errorFetchingGamesInfo,
  fetchingGamesInfo,
  successFetchingGamesInfo
} from "./actionCreators";

const useGamesInfoApi = () => {
  const { dispatch } = useContext(EShopContext);

  const getGamesInfo = useCallback(async () => {
    dispatch(fetchingGamesInfo());
    try {
      const response = await fetch("http://localhost:8080/games")
        .then(response => {
          return response.json();
        })
        .then(data => {
          return data;
        });
      dispatch(successFetchingGamesInfo(response));
    } catch (e) {
      dispatch(errorFetchingGamesInfo(e));
    }
  }, [dispatch]);

  return [getGamesInfo];
};

export default useGamesInfoApi;
