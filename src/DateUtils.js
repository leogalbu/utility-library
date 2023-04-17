/**
 * A utility library for working with dates in JavaScript.
 * @namespace DateUtils
 */

function isMilliseconds(date) {
  if (typeof date !== "number" || date.toString().length !== 13) {
    // Try to parse the date string to milliseconds
    const parsedDate = Date.parse(date);
    return parsedDate && parsedDate.toString().length === 13;
  }
  return true;
}

function formatDate(date, format, locale) {
  if (date instanceof Date === false) {
    date = new Date(date);
  }

  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();

  if (day.length === 1) {
    day = "0" + day;
  }

  if (month.length === 1) {
    month = "0" + month;
  }

  switch (format) {
    case "DD/MM/YYYY":
      return day + "/" + month + "/" + year;
    default:
      throw new Error("Unsupported format");
  }
}

function diffInMilliseconds(date1, date2) {
  if (!isMilliseconds(date1) || !isMilliseconds(date2)) {
    throw new Error("Invalid date input");
  }

  return Math.abs(date1 - date2);
}

function getCurrentDateInMilliseconds() {
  return Date.now();
}

/**
 * Returns the number of days in the month of the specified date.
 *
 * @param {number} date - The date in milliseconds since the Unix epoch.
 * @returns {number} The number of days in the month.
 * @throws {Error} If the input date is not a valid number of milliseconds.
 */
function getDaysInMonth(date) {
  if (!isMilliseconds(date)) {
    throw new Error('Invalid date');
  }
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  return daysInMonth;
}

function diffInDays(date1, date2) {
  if (!isMilliseconds(date1) || !isMilliseconds(date2)) {
    throw new Error("Invalid date input");
  }

  const diffInMs = Math.abs(date1 - date2);
  const msInDay = 24 * 60 * 60 * 1000;
  return Math.floor(diffInMs / msInDay);
}

function diffInYears(date1, date2) {
  if (!isMilliseconds(date1) || !isMilliseconds(date2)) {
    throw new Error("Invalid date input");
  }

  const diffInMilliseconds = Math.abs(date1 - date2);
  const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25;
  const diffInYears = Math.round(diffInMilliseconds / yearInMilliseconds);

  return diffInYears;
}

function addDays(date, days) {
  if (!isMilliseconds(date)) {
    throw new Error("Invalid date input");
  }

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate.getTime();
}

function subtractDays(date, days) {
  if (!isMilliseconds(date)) {
    throw new Error("Invalid date input");
  }

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate.getTime();
}

function addMonths(date, months) {
  if (!isMilliseconds(date)) {
    throw new Error("Invalid date input");
  }

  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate.getTime();
}

function addYears(date, years) {
  if (!isMilliseconds(date)) {
    throw new Error("Invalid date input");
  }

  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate.getTime();
}

/**
 * Calculates the age of a person based on their birthdate and a base date.
 *
 * @param {Date} birthDate - The person's birthdate.
 * @param {Date} [baseDate=new Date()] - The base date to calculate the age from (defaults to the current date).
 * @returns {number} The person's age in years.
 * @throws {Error} If either argument is not a valid Date object.
 */
function getAge(birthDate, baseDate) {
  if (!(birthDate instanceof Date) || (baseDate && !(baseDate instanceof Date))) {
      throw new Error("Invalid input");
  }
  baseDate = baseDate || new Date();
  var age = baseDate.getFullYear() - birthDate.getFullYear();
  var m = baseDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && baseDate.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const DateUtils = {
  isMilliseconds,
  formatDate,
  diffInMilliseconds,
  getCurrentDateInMilliseconds,
  getDaysInMonth,
  diffInDays,
  diffInYears,
  addDays,
  subtractDays,
  addMonths,
  addYears,
  getAge
};

module.exports = DateUtils;