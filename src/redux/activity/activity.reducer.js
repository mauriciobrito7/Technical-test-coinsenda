const INITIAL_STATE = {
  deposits: [],
  withdraws: [],
  swaps: [],
  loading: false,
};

const activityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DEPOSITS":
      return {
        ...state,
        deposits: [],
      };

    case "FETCH_WITHDRAWS":
      return {
        ...state,
        withdraws: [],
      };

    case "FETCH_SWAPS":
      return {
        ...state,
        swaps: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
