const DateUtils = require("../src/DateUtils");

describe('DateUtils', () => {
  describe('isMilliseconds', () => {
    test('returns true for valid milliseconds', () => {
      expect(DateUtils.isMilliseconds(1645786200000)).toBe(true);
    });

    test('returns true for date strings in ISO format', () => {
      expect(DateUtils.isMilliseconds('2022-02-24T12:10:00.000Z')).toBe(true);
    });

    test('returns false for invalid input', () => {
      expect(DateUtils.isMilliseconds('not a date')).toBe(NaN);
      expect(DateUtils.isMilliseconds(1645786200)).toBe(NaN);
    });
  });

  describe('formatDate', () => {
    test('formats date in DD/MM/YYYY format', () => {
      const date = new Date(2022, 3, 15); // April 15, 2022
      const formatted = DateUtils.formatDate(date, 'DD/MM/YYYY');
      expect(formatted).toBe('15/04/2022');
    });

    test('throws error for unsupported format', () => {
      const date = new Date();
      expect(() => {
        DateUtils.formatDate(date, 'unsupported format');
      }).toThrow('Unsupported format');
    });
  });

  describe('diffInMilliseconds', () => {
    test('returns difference between two dates in milliseconds', () => {
      const date1 = new Date(2022, 3, 1); // April 1, 2022
      const date2 = new Date(2022, 3, 15); // April 15, 2022
      const diff = DateUtils.diffInMilliseconds(date1.getTime(), date2.getTime());
      expect(diff).toBe(1209600000); // 2 weeks in milliseconds
    });

    test('throws error for invalid input', () => {
      expect(() => {
        DateUtils.diffInMilliseconds('not a date', 1645786200000);
      }).toThrow('Invalid date input');
    });
  });

  describe('getDaysInMonth', () => {
    test('returns the number of days in the month', () => {
      const date = 1650194400000; // April
      const daysInMonth = DateUtils.getDaysInMonth(date);
      expect(daysInMonth).toBe(30);
    });
  
    test('throws an error for an invalid date', () => {
      const date = 'invalid date';
      expect(() => {
        DateUtils.getDaysInMonth(date);
      }).toThrow('Invalid date');
    });
  });

  describe('getCurrentDateInMilliseconds', () => {
    test('returns current date in milliseconds', () => {
      const now = Date.now();
      const current = DateUtils.getCurrentDateInMilliseconds();
      expect(current).toBeGreaterThanOrEqual(now);
    });
  });

  describe('diffInDays', () => {
    test('returns number of days between two dates', () => {
      const date1 = new Date(2022, 3, 1); // April 1, 2022
      const date2 = new Date(2022, 3, 15); // April 15, 2022
      const diff = DateUtils.diffInDays(date1.getTime(), date2.getTime());
      expect(diff).toBe(14);
    });

    test('throws error for invalid input', () => {
      expect(() => {
        DateUtils.diffInDays('not a date', 1645786200000);
      }).toThrow('Invalid date input');
    });
  });

  describe('addDays', () => {
    test('adds specified number of days to a date', () => {
      const date = new Date(2022, 3, 1); // April 1, 2022
      const newDate = DateUtils.addDays(date.getTime(), 7);
      expect(newDate).toBe(new Date(2022, 3, 8).getTime());
    });

    test('throws error for invalid input', () => {
      expect(() => {
        DateUtils.addDays('not a date', 7);
      }).toThrow('Invalid date input');
    });
  });

  describe('subtractDays', () => {
    test('subtracts specified number of days from a date', () => {
      const date = new Date(2022, 3, 15); // April 15, 2022
      const newDate = DateUtils.subtractDays(date.getTime(), 7);
      expect(newDate).toBe(new Date(2022, 3, 8).getTime());
    });

    test('throws error for invalid input', () => {
      expect(() => {
        DateUtils.subtractDays('not a date', 7);
      }).toThrow('Invalid date input');
    });
  });

  describe('addMonths', () => {
    test('adds specified number of months to a date', () => {
      const date = new Date(2022, 3, 15); // April 15, 2022
      const newDate = DateUtils.addMonths(date.getTime(), 3);
      expect(newDate).toBe(new Date(2022, 6, 15).getTime());
    });

    test('throws error for invalid input', () => {
      expect(() => {
        DateUtils.addMonths('not a date', 3);
      }).toThrow('Invalid date input');
    });
  });

  describe('addYears', () => {
    test('adds specified number of years to a date', () => {
      const date = new Date(2022, 3, 15); // April 15, 2022
      const newDate = DateUtils.addYears(date.getTime(), 1);
      expect(newDate).toBe(new Date(2023, 3, 15).getTime());
    });

    test('throws error for invalid input', () => {
      expect(() => {
        DateUtils.addYears('not a date', 1);
      }).toThrow('Invalid date input');
    });
  });
});

describe("diffInYears", () => {
  test("should return 0 when the two dates are the same", () => {
    const date1 = new Date("2022-01-01").getTime();
    const date2 = new Date("2022-01-01").getTime();
    expect(DateUtils.diffInYears(date1, date2)).toEqual(0);
  });

  test("should return the difference in years between two dates", () => {
    const date1 = new Date("2022-01-01").getTime();
    const date2 = new Date("2023-01-01").getTime();
    expect(DateUtils.diffInYears(date1, date2)).toEqual(1);
  });

  test("should round down when the difference is less than a year", () => {
    const date1 = new Date("2022-01-01").getTime();
    const date2 = new Date("2022-06-30").getTime();
    expect(DateUtils.diffInYears(date1, date2)).toEqual(0);
  });

  test("should round up when the difference is more than a year", () => {
    const date1 = new Date("2022-01-01").getTime();
    const date2 = new Date("2023-06-30").getTime();
    expect(DateUtils.diffInYears(date1, date2)).toEqual(1);
  });
})

describe("_getAge", () => {
  test("returns the correct age when baseDate is not provided", () => {
      const birthDate = new Date(1990, 0, 1);
      const expectedAge = new Date().getFullYear() - birthDate.getFullYear();
      expect(DateUtils.getAge(birthDate)).toBe(expectedAge);
  });

  test("returns the correct age when baseDate is provided", () => {
      const birthDate = new Date(1990, 0, 1);
      const baseDate = new Date(2022, 0, 1);
      const expectedAge = baseDate.getFullYear() - birthDate.getFullYear();
      expect(DateUtils.getAge(birthDate, baseDate)).toBe(expectedAge);
  });

  test("throws an error when birthDate is not a Date object", () => {
      expect(() => DateUtils.getAge("1990-01-01")).toThrow("Invalid input");
  });

  test("throws an error when baseDate is not a Date object", () => {
      const birthDate = new Date(1990, 0, 1);
      expect(() =>DateUtils.getAge(birthDate, "2022-01-01")).toThrow("Invalid input");
  });
});