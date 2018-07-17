import {AUTH_INPUT_CHANGE} from "../actions/types"

const INIT_STATE = {
  email: "",
  password: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_INPUT_CHANGE:
      return {...state, [action.payload.field]: action.payload.value};
    default:
      return state
  }
}