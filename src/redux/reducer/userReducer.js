import produce from "immer";
import * as types from "../action/actionType";

const initialState = {
  user: {
    data: [],
  },
};

const userListReducer = (draft = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      break;
    case types.GET_USER_SUCCESS:
      return {
        ...draft,
        user: {
          ...draft.user,
          ...action.payload,
        },
      };
    case types.GET_USER_FAILURE:
      break;

    default:
      return draft;
  }
};

export const userReducer = produce(userListReducer);
