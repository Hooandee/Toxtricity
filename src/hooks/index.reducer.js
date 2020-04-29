import React, { useReducer } from "react";

import {
  ERROR_FETCHING_GAMES_INFO,
  FETCHING_GAMES_INFO,
  SUCCESS_FETCHING_GAMES_INFO,
} from "./Games/actionTypes";

export const initialState = {
  games: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GAMES_INFO: {
      return {
        ...state,
        hasFailed: false,
        isFetching: true,
        status: FETCHING_GAMES_INFO,
        games: { isFetching: true, error: false },
      };
    }

    case SUCCESS_FETCHING_GAMES_INFO: {
      return {
        ...state,
        hasFailed: false,
        isPosting: false,
        status: SUCCESS_FETCHING_GAMES_INFO,
        games: {
          data: [...action.response],
          isFetching: false,
          error: false,
        },
      };
    }

    case ERROR_FETCHING_GAMES_INFO: {
      return {
        ...state,
        hasFailed: true,
        isFetching: false,
        status: ERROR_FETCHING_GAMES_INFO,
        games: { ...state.games, isFetching: false, error: action.response },
      };
    }

    default: {
      return state;
    }
  }
};

export const MainContext = React.createContext({ state: initialState });

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={{ state: state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
