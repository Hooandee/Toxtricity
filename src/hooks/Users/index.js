import { useCallback, useContext } from "react";

import { MainContext } from "../index.reducer";

import {
  errorFetchingUsersInfo,
  fetchingUsersInfo,
  successFetchingUsersInfo,
} from "./actionCreators";

const useUsersInfoApi = () => {
  const { dispatch } = useContext(MainContext);

  const getUsersInfo = useCallback(async () => {
    dispatch(fetchingUsersInfo());
    try {
      const response = await fetch("https://reqres.in/api/users?page=2")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
      dispatch(successFetchingUsersInfo(response));
    } catch (e) {
      dispatch(errorFetchingUsersInfo(e));
    }
  }, [dispatch]);

  return { getUsersInfo };
};

export default useUsersInfoApi;
