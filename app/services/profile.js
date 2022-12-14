import {
  getProfile as getProfileReducer,
  removeProfile as removeProfileReducer,
} from "Reducers/apiCalls/profile";

export const getProfile = (dispatch, data) => {
  dispatch(getProfileReducer(data));
};

export const removeProfile = (dispatch) => {
  dispatch(removeProfileReducer());
};
