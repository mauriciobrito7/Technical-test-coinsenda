const USER_ID = "60b1da870982680064b1bf04";
const DEPOSIT_URL = "https://deposit.bitsenda.com/api/";
const WITHDRAW_URL = "https://withdraw.bitsenda.com/api/";
const SWAP_URL = "https://swap.bitsenda.com/api/";

export const fetchDeposits = async (authToken) => {
  try {
    const response = await fetch(`${DEPOSIT_URL}users/${USER_ID}/deposits`, {
      method: `GET`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (!response.ok) throw new Error(await response.text());

    const deposits = await response.json();

    const orderedDeposits = deposits.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    return orderedDeposits;
  } catch (error) {
    return error;
  }
};

export const fetchWithDraws = async (authToken) => {
  try {
    const response = await fetch(`${WITHDRAW_URL}users/${USER_ID}/withdraws`, {
      method: `GET`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const withdraws = await response.json();

    const withdrawsOrdered = withdraws.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    return withdrawsOrdered;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSwaps = async (authToken) => {
  try {
    const response = await fetch(`${SWAP_URL}users/${USER_ID}/swaps`, {
      method: `GET`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const swaps = await response.json();

    const swapsOrdered = swaps.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    return swapsOrdered;
  } catch (error) {
    console.log(error);
  }
};
