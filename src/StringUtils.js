/**
 * A utility library for working with strings in JavaScript.
 * @namespace StringUtils
 */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 * @throws {Error} If the input is not a string.
 */
function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to uppercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The string in uppercase.
 * @throws {Error} If the input is not a string.
 */

function toUpperCase(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  return str.toUpperCase();
}

/**
 * Reverses the characters of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 * @throws {Error} If the input is not a string.
 */
function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  return str.split("").reverse().join("");
}
/**
 * Truncates a string to a specified length and adds an ellipsis if necessary.
 *
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 * @throws {Error} If the input is not a string or maxLength is not a number.
 */
function truncate(str, maxLength) {
  if (typeof str !== "string" || typeof maxLength !== "number") {
    throw new Error("Invalid input");
  }
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  }
  return str;
}
/**
 * Counts the number of words in a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The number of words in the string.
 * @throws {Error} If the input is not a string.
 */
function countWords(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  return str.trim().split(/\s+/).length;
}
/**
 * Determines whether a string is a palindrome.
 *
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * @throws {Error} If the input is not a string.
 */
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

/**
 * Determines whether an email address is valid.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email address is valid, false otherwise.
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Determines whether an Italian CAP is valid.
 *
 * @param {string} cap - The CAP to validate.
 * @returns {boolean} True if the CAP is valid, false otherwise.
 */
function isValidItalianCap(cap) {
  const capRegex = /^\d{5}$/;
  return capRegex.test(cap);
}

/**
 * Determines whether an Italian codice fiscale is valid.
 *
 * @param {string} codiceFiscale - The codice fiscale to validate.
 * @returns {boolean} True if the codice fiscale is valid, false otherwise.
 */
function isValidCodiceFiscale(codiceFiscale) {
  const codiceFiscaleRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
  return codiceFiscaleRegex.test(codiceFiscale);
}


const StringUtils = {
    capitalize,
    toUpperCase,
    reverseString,
    truncate,
    countWords,
    isPalindrome,
    isValidEmail,
    isValidItalianCap,
    isValidCodiceFiscale
}

module.exports = StringUtils;