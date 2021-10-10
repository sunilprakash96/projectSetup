import { TEST_ACTION } from "../../utils/types.utils";

const initialState = {};

const TestReducer = (state = initialState, action) => {
  console.log("Action", action)
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default TestReducer;