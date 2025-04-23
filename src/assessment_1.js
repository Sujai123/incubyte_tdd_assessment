
/**
 * 
 * @param {*} numbers string of numbers separated by delimiter
 * @returns sum of numbers
 */
const add = (numbers) => {
  const arrayOfNumbers = numbers.split(',');
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const num = parseInt(arrayOfNumbers[i]);
    if (isNaN(num)) {
      continue;
    }
    sum += num;
  }
  return sum;
}

module.exports = {
  add: add
}