const StringUtils = require("../src/StringUtils");

describe("String functions", () => {
  test("capitalize returns a capitalized string", () => {
    expect(StringUtils.capitalize("hello")).toBe("Hello");
  });

  test("toUpperCase returns a string in uppercase", () => {
    expect(StringUtils.toUpperCase("hello")).toBe("HELLO");
  });

  test("reverseString returns a reversed string", () => {
    expect(StringUtils.reverseString("hello")).toBe("olleh");
  });

  test("truncate returns a truncated string with ellipsis if necessary", () => {
    expect(StringUtils.truncate("hello world", 5)).toBe("he...");
    expect(StringUtils.truncate("hello world", 11)).toBe("hello world");
  });

  test("countWords returns the number of words in a string", () => {
    expect(StringUtils.countWords("hello world")).toBe(2);
    expect(StringUtils.countWords("")).toBe(1);
  });

  test("isPalindrome returns true if the string is a palindrome", () => {
    expect(StringUtils.isPalindrome("racecar")).toBe(true);
    expect(StringUtils.isPalindrome("hello")).toBe(false);
  });
});

describe("Email validation", () => {
  test("isValidEmail returns true if the email is valid", () => {
    expect(StringUtils.isValidEmail("test@example.com")).toBe(true);
    expect(StringUtils.isValidEmail("not an email")).toBe(false);
  });
});

describe("Italian CAP validation", () => {
  test("isValidItalianCap returns true if the CAP is valid", () => {
    expect(StringUtils.isValidItalianCap("12345")).toBe(true);
    expect(StringUtils.isValidItalianCap("not a cap")).toBe(false);
  });
});

describe("Italian codice fiscale validation", () => {
  test("isValidCodiceFiscale returns true if the codice fiscale is valid", () => {
    expect(StringUtils.isValidCodiceFiscale("ABCDEF12G34H567I")).toBe(true);
    expect(StringUtils.isValidCodiceFiscale("not a codice fiscale")).toBe(false);
  });
});
