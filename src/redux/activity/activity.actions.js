export const fetchDeposits = () => ({
  type: "FETCH_DEPOSITS",
});

export const fetchWithdraws = () => ({
  type: "FETCH_WITHDRAWS",
});

export const fetchSwaps = () => ({
  type: "FETCH_SWAPS",
});

export const setLoading = (flag) => ({
  type: "SET_LOADING",
  payload: flag,
});
