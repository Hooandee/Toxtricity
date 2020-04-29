import {
  ERROR_FETCHING_USERS_INFO,
  FETCHING_USERS_INFO,
  SUCCESS_FETCHING_USERS_INFO,
} from "./actionTypes";

export const fetchingUsersInfo = () => ({ type: FETCHING_USERS_INFO });
export const successFetchingUsersInfo = (response) => ({
  response,
  type: SUCCESS_FETCHING_USERS_INFO,
});
export const errorFetchingUsersInfo = (response) => ({
  response,
  type: ERROR_FETCHING_USERS_INFO,
});
