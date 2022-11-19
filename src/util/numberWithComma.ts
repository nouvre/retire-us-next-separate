export const numberWithComma = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Regex for MM/DD/YYYY or MM-DD-YYYY
export const dateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

export const isValidDateFormat = (dateStr: string) => {
  return dateRegex.test(dateStr);
};
