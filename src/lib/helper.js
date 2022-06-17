export const formatDate = (string) => {
  const y = string.slice(0, 4);
  const m = string.slice(5, 7);
  const d = string.slice(8, 10);

  return `${d}-${m}-${y}`;
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatMoney = (string) =>
  string.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
