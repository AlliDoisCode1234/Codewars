// Input year integer
// return most frequent day(s) of the week that year
// Result should be sorted by the order of the days of the week

// NOTE: Input year an an Int.
//        Output: List form of most frequent days in order

// Steps:
// 1. Create an array of the days of the week
// 2. add properties of starting day and if the day is a leap day
// 3. return result
// 4. if not a leap day, there are two results to push
// 5. else push one day
// 6. make sure order of result is order of the days of the week

function mostFrequentDays(year) {
  let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    startDay = new Date(year, 0, 1).getDay(),
    isNotLeapDay =
      (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false;
  let result = [];
  if (isNotLeapDay) {
    result.push(days[startDay], days[startDay + 1]);
  } else {
    result.push(days[startDay]);
  }

  if (result[0] === "Sunday" && result[1] === "Monday") {
    result.reverse();
  }
  return result;
}

// Testcase
// Test.describe("Basic Tests",_=>{
//     Test.assertSimilar(mostFrequentDays(1770), ['Monday'], "Should be: ['Monday']");
//     Test.assertSimilar(mostFrequentDays(1785), ['Saturday'], "Should be: ['Saturday']");
//     Test.assertSimilar(mostFrequentDays(1794), ['Wednesday'], "Should be: ['Wednesday']");
//     Test.assertSimilar(mostFrequentDays(1901)  , ['Tuesday'], "Should be: ['Tuesday']");
//     Test.assertSimilar(mostFrequentDays(1910), ['Saturday'], "Should be: ['Saturday']");
//     Test.assertSimilar(mostFrequentDays(1968), ['Monday', 'Tuesday'], "Should be: ['Monday', 'Tuesday']");
//     Test.assertSimilar(mostFrequentDays(1984), ['Monday', 'Sunday'], "Should be: ['Monday', 'Sunday']");
//     Test.assertSimilar(mostFrequentDays(1986), ['Wednesday'], "Should be: ['Wednesday']");
//     Test.assertSimilar(mostFrequentDays(2001), ['Monday'], "Should be: ['Monday']");
//     Test.assertSimilar(mostFrequentDays(2016), ['Friday', 'Saturday'], "Should be: ['Friday', 'Saturday']");
//     Test.assertSimilar(mostFrequentDays(2135), ['Saturday'], "Should be: ['Saturday']");
//     Test.assertSimilar(mostFrequentDays(3043), ['Sunday'], "Should be: ['Sunday']");
//     Test.assertSimilar(mostFrequentDays(3150), ['Sunday'], "Should be: ['Sunday']");
//     Test.assertSimilar(mostFrequentDays(3230), ['Tuesday'], "Should be: ['Tuesday']");
//     Test.assertSimilar(mostFrequentDays(3361), ['Thursday'], "Should be: ['Thursday']");
//     Test.assertSimilar(mostFrequentDays(2000), ['Saturday', 'Sunday'], "Should be: ['Saturday', 'Sunday']");
//     Test.assertSimilar(mostFrequentDays(1984), ['Monday', 'Sunday'], "Should be: ['Monday', 'Sunday']");
// })
