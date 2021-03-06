const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  // add more tests here...
  expect(getDaysInMonth("January")).toBe(31);
  expect(getDaysInMonth("April")).toBe(30);
  expect(getDaysInMonth("December")).toBe(31);
  expect(getDaysInMonth(123)).toBe("not found");
});
