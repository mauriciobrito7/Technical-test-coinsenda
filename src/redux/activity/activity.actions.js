export const setDeposits = (deposit) => ({
  type: "SET_DEPOSITS",
  payload: deposit,
});

export const setWithdraws = (withdraws) => ({
  type: "SET_WITHDRAWS",
  payload: withdraws,
});

export const setSwaps = (swaps) => ({
  type: "SET_SWAPS",
  payload: swaps,
});

export const setActivities = () => ({
  type: "SET_ACTIVITIES",
});

export const setLoading = (flag) => ({
  type: "SET_LOADING",
  payload: flag,
});
