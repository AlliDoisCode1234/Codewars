// P = sum of money Mr. Scrooge wants to invest
// Before investing, - how many years (Y = years) has this sum (P) has been in the bank
// P sum plus knowledge of Y will equal the desired sum = D
// The Y accrues interest (I = interest) which is paid yearly
// (Y + (I - T) ) After taxes how much is the new sum after adding the interest

// Note to Tax: ONLY YEARS ACCRUED INTEREST IS TAXED

//Steps:

// 1. Create variable for years = 0
// 2. Run conditional check for desired amount based on math of P, I, and T
// 3. Loop through until desired year
// 4. Return number of years

const calculateYears = (principal, interest, tax, desired) => {
  let years = 0;

  while (principal < desired) {
    let gains = principal * interest - principal * interest * tax;
    principal += gains;
    years++;
  }

  return years;
};

// SAMPLE TEST:

//   function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// Test.describe("calculateYears",function() {
// Test.it("Basic tests",function() {
//     testing(calculateYears(1000, 0.05, 0.18, 1100), 3)
//     testing(calculateYears(1000,0.01625,0.18,1200), 14)
//     testing(calculateYears(1000,0.05,0.18,1000), 0)
// })})
