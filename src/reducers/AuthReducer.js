import {
  AUTH_INPUT_CHANGE,
  AUTH_BEGIN,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from "../actions/types"

const INIT_STATE = {
  email: "",
  password: "",
  user: {},
  error: "",
  isLoading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_INPUT_CHANGE:
      return {...state, [action.payload.field]: action.payload.value};
    case AUTH_BEGIN:
      return {...state, isLoading: true, error: ""};
    case AUTH_SUCCESS:
      return {...state, user: action.payload};
    case AUTH_FAILURE:
      return {...state, error: "Authentication failed. Sorry"};
    default:
      return state
  }
}