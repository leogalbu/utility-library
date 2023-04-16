/**
 * A utility library for working with dates in JavaScript.
 * @namespace DateUtils
 */
const DateUtils = {
  /**
   * Private function to validate if input is in milliseconds.
   * @memberof DateUtils
   * @private
   * @param {number|string} date - The input date to validate.
   * @returns {boolean} - `true` if input is in milliseconds, `false` otherwise.
   */
  isMilliseconds: function (date) {
    if (typeof date !== "number" || date.toString().length !== 13) {
      // Try to parse the date string to milliseconds
      const parsedDate = Date.parse(date);
      return parsedDate && parsedDate.toString().length === 13;
    }
    return true;
  },

  /**
   * Public function to get a formatted date string.
   * @memberof DateUtils
   * @param {number|string} date - The input date to format in milliseconds.
   * @param {string} format - The output format string.
   * @param {string} locale - The locale to use for formatting.
   * @returns {string} - The formatted date string.
   * @throws {Error} - Throws an error if the input date is invalid.
   */
  formatDate: function (date, format, locale) {
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
  },

  /**
   * Public function to get the difference between two dates in milliseconds.
   * @memberof DateUtils
   * @param {number|string} date1 - The first input date to compare in milliseconds.
   * @param {number|string} date2 - The second input date to compare in milliseconds.
   * @returns {number} - The difference between the two input dates in milliseconds.
   * @throws {Error} - Throws an error if either input date is invalid.
   */
  diffInMilliseconds: function (date1, date2) {
    if (!this.isMilliseconds(date1) || !this.isMilliseconds(date2)) {
      throw new Error("Invalid date input");
    }

    return Math.abs(date1 - date2);
  },

  /**
   * Public function to get the current date in milliseconds.
   * @memberof DateUtils
   * @returns {number} - The current date in milliseconds.
   */
  getCurrentDateInMilliseconds: function () {
    return Date.now();
  },

  /**
   * Public function to get the number of days between two dates.
   * @memberof DateUtils
   * @param {number|string} date1 - The first input date to compare in milliseconds.
   * @param {number|string} date2 - The second input date to compare in milliseconds.
   * @returns {number} - The number of days between the two input dates.
   * @throws {Error} - Throws an error if either input date is invalid.
   */
  diffInDays: function (date1, date2) {
    if (!this.isMilliseconds(date1) || !this.isMilliseconds(date2)) {
      throw new Error("Invalid date input");
    }

    const diffInMs = Math.abs(date1 - date2);
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.floor(diffInMs / msInDay);
  },

  /**
   * Public function to add a specified number of days to a date.
   * @memberof DateUtils
   * @param {number|string} date - The input date to add days to in milliseconds.
   * @param {number} days - The number of days to add.
   * @returns {number} - The new date in milliseconds after adding days.
   * @throws {Error} - Throws an error if the input date is invalid.
   */
  addDays: function (date, days) {
    if (!this.isMilliseconds(date)) {
      throw new Error("Invalid date input");
    }

    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.getTime();
  },

  /**
   * Public function to subtract a specified number of days from a date.
   * @memberof DateUtils
   * @param {number|string} date - The input date to subtract days from in milliseconds.
   * @param {number} days - The number of days to subtract.
   * @returns {number} - The new date in milliseconds after subtracting days.
   * @throws {Error} - Throws an error if the input date is invalid.
   */
  subtractDays: function (date, days) {
    if (!this.isMilliseconds(date)) {
      throw new Error("Invalid date input");
    }

    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate.getTime();
  },

  /**
   * Public function to add a specified number of months to a date.
   * @memberof DateUtils
   * @param {number|string} date - The input date to add months to in milliseconds.
   * @param {number} months - The number of months to add.
   * @returns {number} - The new date in milliseconds after adding months.
   * @throws {Error} - Throws an error if the input date is invalid.
   */
  addMonths: function (date, months) {
    if (!this.isMilliseconds(date)) {
      throw new Error("Invalid date input");
    }

    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate.getTime();
  },

  /**
   * Public function to add a specified number of years to a date.
   * @memberof DateUtils
   * @param {number|string} date - The input date to add years to in milliseconds.
   * @param {number} years - The number of years to add.
   * @returns {number} - The new date in milliseconds after adding years.
   * @throws {Error} - Throws an error if the input date is invalid.
   */
  addYears: function (date, years) {
    if (!this.isMilliseconds(date)) {
      throw new Error("Invalid date input");
    }

    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate.getTime();
  },
};

console.log(DateUtils)

module.exports = DateUtils;
