
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ "amount": 90000, "years": 25, "rate": 7.4 })).toEqual("659.25");
  expect(calculateMonthlyPayment({ "amount": 40000, "years": 6, "rate": 6 })).toEqual("662.92");
  expect(calculateMonthlyPayment({ "amount": 400000, "years": 20, "rate": 3 })).toEqual("2218.39");
  // ...
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ "amount": 220000, "years": 35, "rate": 5 })).toBeCloseTo("1110.31", 2);
  expect(calculateMonthlyPayment({ "amount": 62000, "years": 10, "rate": 4.3 })).toBeCloseTo("636.60", 2);
  expect(calculateMonthlyPayment({ "amount": 20000, "years": 15, "rate": 10 })).toBeCloseTo("214.92", 2);
  // ..
});

/// etc