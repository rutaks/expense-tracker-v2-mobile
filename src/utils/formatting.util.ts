import {days, months} from './date.util';

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

export const formatDate = (date: Date) => {
  var d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
};

export const toCustomDateFormat = (d: Date) => {
  // const year = d.getFullYear();
  const date = d.getDate();

  const monthName = months[d.getMonth()];
  const dayName = days[d.getDay()];

  return `${dayName}, ${date} ${monthName}`;
};

export const formatToRoundedNum = (num: number, digits = 1) => {
  const si = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'k'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};
