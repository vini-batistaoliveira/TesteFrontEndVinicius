const INITIAL_STATE = {
  value: 0
};

export default function addCartReducer(state = INITIAL_STATE, action) {
  if (action.type === "ADDTOCART") {
    return {
      ...state,
      value: action.value
    };
  }

  return state;
}
