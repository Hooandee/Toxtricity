import React, { useReducer } from "react";

import {
  ERROR_FETCHING_USERS_INFO,
  FETCHING_USERS_INFO,
  SUCCESS_FETCHING_USERS_INFO,
} from "./Users/actionTypes";

export const initialState = {
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS_INFO: {
      return {
        ...state,
        hasFailed: false,
        isFetching: true,
        status: FETCHING_USERS_INFO,
        users: { isFetching: true, error: false },
      };
    }

    case SUCCESS_FETCHING_USERS_INFO: {
      return {
        ...state,
        hasFailed: false,
        isPosting: false,
        status: SUCCESS_FETCHING_USERS_INFO,
        users: {
          data: [...action.response.data],
          isFetching: false,
          error: false,
        },
      };
    }

    case ERROR_FETCHING_USERS_INFO: {
      return {
        ...state,
        hasFailed: true,
        isFetching: false,
        status: ERROR_FETCHING_USERS_INFO,
        users: { ...state.users, isFetching: false, error: action.response },
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
