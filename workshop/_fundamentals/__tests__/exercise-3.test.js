const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  // add more tests here...
  expect(getPairing("burger")).toBe("beer");
  expect(getPairing("fish")).toBe("white wine");
  expect(getPairing("beef")).toBe("red wine");
  expect(getPairing("strawberries")).toBe("champagne");
  expect(getPairing(123)).toBe("I didn't get that!");
});
