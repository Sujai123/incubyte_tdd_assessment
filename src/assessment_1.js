/**
 * 
 * @param {*} numbers string of numbers separated by delimiter
 * @returns sum of numbers
 */
const add = (numbers) => {
  let delimiter = /\s*,\s*|\s+/;
  let stringToBeCompared = String(numbers);

  // finding the delimiter and modifying the comparison array
  if(stringToBeCompared.startsWith('//')) {
    delimiter = stringToBeCompared.charAt(2)
    stringToBeCompared = stringToBeCompared.slice(2)
  }

  // get array of numbers from the delimiter
  const numbersArray = stringToBeCompared.split(delimiter);

  // sum the array of numbers
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    const num = parseInt(numbersArray[i]);
    // ignore if number is not an integer
    if (isNaN(num)) {
      continue;
    }

    // check for negative numbers
    if (num < 0) {
      throw new Error(`negative numbers not allowed ${num}`);
    }
    sum += num;
  }
  return sum;
}

module.exports = {
  add: add
}