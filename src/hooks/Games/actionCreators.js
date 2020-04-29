import {
  ERROR_FETCHING_GAMES_INFO,
  FETCHING_GAMES_INFO,
  SUCCESS_FETCHING_GAMES_INFO
} from "./actionTypes";

export const fetchingGamesInfo = () => ({ type: FETCHING_GAMES_INFO });
export const successFetchingGamesInfo = response => ({
  response,
  type: SUCCESS_FETCHING_GAMES_INFO
});
export const errorFetchingGamesInfo = response => ({
  response,
  type: ERROR_FETCHING_GAMES_INFO
});
