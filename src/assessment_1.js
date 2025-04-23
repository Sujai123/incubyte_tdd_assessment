/**
 * 
 * @param {*} numbers string of numbers separated by delimiter
 * @returns sum of numbers
 */
const add = (numbers) => {
  // initial delimiter and comparison string(later may or may not be changed)
  let delimiter = /\s*,\s*|\s+/;
  let stringToBeCompared = String(numbers);

  const negativeNumbers = [];
  const THRESHOLD = 1000;

  // finding the delimiter and modifying the comparison array
  const delimiterMatches = [...stringToBeCompared.matchAll(/\[(.+?)\]/g)];
  const delimiters = delimiterMatches.map(match => match[1]);

  // to compare delimiters in format //[<delimiter>]\n
  if(delimiters.length > 0) {
    // ignore delimiter part and assign the rest of the string
    const firstNewlineIndex = stringToBeCompared.indexOf('\n');
    stringToBeCompared = firstNewlineIndex !== -1 ? stringToBeCompared.slice(firstNewlineIndex + 1) : '';

    // build the regex, before building the regex escape the characters which are in part of regex syntax.
    const escapedDelimiters = delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    delimiter = new RegExp(escapedDelimiters.join('|'), 'g');
  } else if (stringToBeCompared.startsWith('//')) { // to compare delimiters in format //<delimiter>\n
    delimiter = stringToBeCompared.charAt(2)
    // ignore delimiter part and assign the rest of the string
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
      negativeNumbers.push(num);
      continue;
    }
    
    // check for number greater than threshold
    if (!(num < THRESHOLD)) continue;

    sum += num;
  }

  // throw error if negative number
  if(negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  }
  return sum;
}

module.exports = {
  add: add
}