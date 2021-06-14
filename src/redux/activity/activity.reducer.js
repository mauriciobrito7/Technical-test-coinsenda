const INITIAL_STATE = {
  deposits: [],
  withdraws: [],
  swaps: [],
  activities: [],
  loading: false,
  authToken:
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiI2MGIxZGE4NzA5ODI2ODAwNjRiMWJmMDQiLCJhdXRoX2NsaWVudF9pZCI6IjYwNjdmNWE5YmRkNzJkMDBkMTA3NjM2NSIsImlzcyI6IjYwNjdmNThlYmRkNzJkMDBkMTA3NjM1YSIsImF1ZCI6InRyYW5zYWN0aW9uLGlkZW50aXR5LGF1dGgsbm90aWZpY2F0aW9uLGluZm8sdHJhbnNhY3Rpb24sYWNjb3VudCxkZXBvc2l0LHdpdGhkcmF3LHN3YXAiLCJlbWFpbCI6InNvcG9ydGUrX3Rlc3RpbmdAY29pbnNlbmRhLmNvbSIsImxhbmd1YWdlIjoiZXMiLCJtZXRhZGF0YSI6Int9IiwianRpIjoiNjBjNzZkZDhiZjE2YzYwMDU2NDUyOGZjIiwiaWF0IjoxNjIzNjgyNTIwLCJleHAiOjE2MjM2ODI4MjB9.VYAoC19ptzGZrIPpPlyJOrOzg0BpsST4Ru9897F5Q5t-ZK-KY7kcuIPwKVEPg3rAJOH2i01J4dBAQZJ-LC8ZHA",
};

const activityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DEPOSITS":
      return {
        ...state,
        deposits: [...state.deposits, action.payload],
      };

    case "SET_WITHDRAWS":
      return {
        ...state,
        withdraws: [...state.withdraws, action.payload],
      };

    case "SET_SWAPS":
      return {
        ...state,
        swaps: [...state.swaps, action.payload],
      };
    case "SET_ACTIVITIES":
      const arrayMerge = state.deposits
        .concat(state.withdraws)
        .concat(state.swaps);

      return {
        ...state,
        activities: arrayMerge,
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

export default activityReducer;
