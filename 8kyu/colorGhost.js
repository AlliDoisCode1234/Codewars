// Problem:
// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

class Ghost {
    constructor() {
      this.colors = ['white', 'yellow', 'purple', 'red']
    }
    
    get color() {
      const randomPosition = Math.trunc(Math.random() * this.colors.length)
      return this.colors[randomPosition]
    }
  }

//   Testcase:
//   // Since Node 10, we're using Mocha.
// // You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// // chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });
