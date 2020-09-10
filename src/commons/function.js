export const formatter = new Intl.NumberFormat();
export const formatterMoney = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0
});

export const customFormatMoney = value =>
  formatterMoney.format(value).replace("VND", "ƒ ");
