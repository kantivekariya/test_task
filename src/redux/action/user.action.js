import axios from "axios";
import * as types from "./actionType";
import config from "../../config/Config";

export function getAllUserList() {
  return async (dispatch) => {
    dispatch({ type: types.GET_USER_REQUEST });
    try {
      const res = await axios.get(`${config.BASE_URL}/?results=100`);
      dispatch({ type: types.GET_USER_SUCCESS, payload: res });
      return res;
    } catch (error) {
      dispatch({ type: types.GET_USER_FAILURE });
      return Promise.reject(error);
    }
  };
}
