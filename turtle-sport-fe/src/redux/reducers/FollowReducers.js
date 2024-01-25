import { GET_ADD_FOLLOW, GET_FOLLOW_ACCOUNT } from "../constant";

export const followReducer = (follow = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ADD_FOLLOW:
      return payload;
    case GET_FOLLOW_ACCOUNT:
      return payload;
    default:
      return follow;
  }
};
