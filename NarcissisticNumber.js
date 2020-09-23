// NN =  Number which sum of its own digits (value = 370) and n = 3 so 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370
// Narcissistic Numbers are numbers which when separated and multiplied by the power of the length of the number and added together equal the original number

// Restrict to decimal (base 10).

// Return True or False - Boolean - Check whether the given number is a NN in base 10.

//NOTE: Error only valid positive non-zero integers will be passed into the function

//Steps:

// 1. Create function that passes the value we want to check through
// 2. When the value passes through the function we want to convert it to a string and split the string as to separate the individual value
// 3. Then we are going to add the results so I need a variable for the results = nResults
// 4. Run through each value to change them back to a number
// 5. Perform the necessary Math.pow the num and the value.length
// 6. Return only boolean to determine if it is a match to a NN

const narcissistic = (value) => {
  const nValue = String(value).split(" ");
  console.log(nValue);
  let nResult = 0;

  for (c of nValue) {
    const num = parseInt(c, 0);

    nResult += Math.pow(num, nValue.length);
  }

  return nResult === value;
};
