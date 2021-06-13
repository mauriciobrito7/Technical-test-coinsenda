export const sortArrayByDate = (array) =>
  array.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

//formatterCurrency.format(value)
export const formatterCurrency = (locales, currency) =>
  new Intl.NumberFormat(`${locales}`, {
    style: "currency",
    currency: `${currency}`,
    minimumFractionDigits: 0,
  });

export const formatDateFromString = (date) => {
  const newDate = new Date(date);

  const formatDate =
    newDate.getDate() +
    "-" +
    (newDate.getMonth() + 1) +
    "-" +
    newDate.getFullYear();

  return formatDate;
};

export const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
