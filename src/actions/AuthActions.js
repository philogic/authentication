import {AUTH_INPUT_CHANGE} from "./types";

export const authInputChange = (obj) => {
  return {
    type: AUTH_INPUT_CHANGE,
    payload: obj
  }
};