/**
 * Adds a comma after  each instance of 3 digits in string
 * @param numberString
 */
export const numberWithCommas = (numberString = '') => {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const convertToNumber = (str: string) => {
  return str.replace(/\D/g, '');
};

/**
 * Changes number string into preferred phone number format
 * @param phoneNumberString
 */
export const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
  if (match) {
    return match[1] + ' ' + match[2] + ' ' + match[3];
  }
  return null;
};

/**
 * Changes number string into national id format
 * @param nationalIdString
 */
export const formatNationalId = (nationalIdString: string) => {
  var cleaned = ('' + nationalIdString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{1})(\d{4})(\d{1})(\d{7})(\d{1})(\d{2})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]} ${match[6]}`;
  }
  return null;
};

/**
 * Gets the percentage of a value passed by on the total amount
 * @param currentValue
 * @param totalAmount
 * @returns
 */
export const formatToPercentage = (
  currentValue: number,
  totalAmount: number,
) => {
  const percentRate = 100 / totalAmount;

  return currentValue * percentRate;
};

/**
 * Returns the value in number type
 * @param x
 * @returns
 */
export const getIntegerOrZero = (x: number | string) => {
  if (typeof x === 'string') {
    return parseInt(x, 10);
  } else if (x === undefined || x === null) {
    return 0;
  }
  return x;
};
