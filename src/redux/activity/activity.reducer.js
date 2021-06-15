import { normalizeData } from "../../utils/index";

const INITIAL_STATE = {
  deposits: [],
  withdraws: [],
  swaps: [],
  activities: [],
  loading: false,
  error: null,
  authToken:
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiI2MGIxZGE4NzA5ODI2ODAwNjRiMWJmMDQiLCJhdXRoX2NsaWVudF9pZCI6IjYwNjdmNWE5YmRkNzJkMDBkMTA3NjM2NSIsImlzcyI6IjYwNjdmNThlYmRkNzJkMDBkMTA3NjM1YSIsImF1ZCI6InRyYW5zYWN0aW9uLGlkZW50aXR5LGF1dGgsbm90aWZpY2F0aW9uLGluZm8sdHJhbnNhY3Rpb24sYWNjb3VudCxkZXBvc2l0LHdpdGhkcmF3LHN3YXAiLCJlbWFpbCI6InNvcG9ydGUrX3Rlc3RpbmdAY29pbnNlbmRhLmNvbSIsImxhbmd1YWdlIjoiZXMiLCJtZXRhZGF0YSI6Int9IiwianRpIjoiNjBjN2RhZmZiZjE2YzYwMDU2NDUyOTUxIiwiaWF0IjoxNjIzNzEwNDYzLCJleHAiOjE2MjM3MTA3NjN9.fTxN3qbDP00xDrPeh5Qbk7Vw6pSVgHdC48EEJYld-0nN7s7h_UTaep4ORUYNaVP3ZUOshQelW5ryiZpv2a1EFw",
};

const activityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DEPOSITS":
      const deposits = normalizeData(action.payload, "deposito");
      return {
        ...state,
        deposits: deposits,
      };

    case "SET_WITHDRAWS":
      const withdraws = normalizeData(action.payload, "retiro");

      return {
        ...state,
        withdraws: withdraws,
      };

    case "SET_SWAPS":
      const swaps = normalizeData(action.payload, "intercambio");
      return {
        ...state,
        swaps: swaps,
      };
    case "SET_ACTIVITIES":
      const depositsFlat = normalizeData(state.deposits, "deposito");
      const withdrawsFlat = normalizeData(state.withdraws, "retiro");
      const swapsFlat = normalizeData(state.swaps, "intercambio");

      const arrayMerge = depositsFlat.concat(withdrawsFlat).concat(swapsFlat);

      const activities = arrayMerge.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      return {
        ...state,
        activities: activities,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SET_TOKEN":
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};

export default activityReducer;
