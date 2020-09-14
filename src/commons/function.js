export const formatter = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3
});
export const formatterMoney = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0
});

export const customFormatMoney = value =>
  formatterMoney.format(value).replace("VND", "ƒ ");
