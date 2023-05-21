//1. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(nums) {
    let min_num = nums[0];
    let max_num = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min_num) {
        min_num = nums[i];
      }
      
      if (nums[i] > max_num) {
        max_num = nums[i];
      }
    }
    
    return [min_num, max_num];
  }

  
//2. Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
function filterArray(arr) {
    return arr.filter(item => typeof item === 'number');
  }

//3. Create a function that returns an array of strings sorted by length in ascending order.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
//4. Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(arr) {
  return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

//5. Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
function getOnlyEvens(arr) {
    return arr.filter((num, index) => num % 2 === 0 && index % 2 === 0);
  }

//6. Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }

//7. Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
function isAvgWhole(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    return Number.isInteger(average);
  }

//8. Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
  }

//9. Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
function sortNumsAscending(arr) {
    if (arr === null || arr === undefined || arr.length === 0) {
      return [];
    }
    return arr.slice().sort((a, b) => a - b);
  }

//10. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
    return arr.map(subArr => Math.max(...subArr));
  }
  
//11. A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
function set(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let uArr = [];
    
    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i] !== sortArr[i + 1]) {
        uArr.push(sortArr[i]);
      }
    }
    return uArr;
  }
  
//12. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
function formatPhoneNumber(numbers) {
    let aCode = numbers.slice(0, 3).join('');
      let fPart = numbers.slice(3, 6).join('');
      let sPart = numbers.slice(6).join('');
      return `(${aCode}) ${fPart}-${sPart}`;
    }
  
//13. A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of nam
function societyName(names) {
    let initial = names.map(name => name[0]);
    let sInitial = initial.sort();
    return sInitial.join('');
  }
  
//14. Create a function that takes three parameters where:
// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.
function arrayOperation(x, y, n) {
    let result = [];
    for (let i = x; i <= y; i++) {
      if (i % n === 0) {
        result.push(i);
      }
    }
    return result;
  }
  

//15. Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
function maxTotal(numbers) {
    let sNum = numbers.sort((a, b) => b - a);
    let selectedNum = sNum.slice(0, 5);
    let total = selectedNum.reduce((sum, num) => sum + num, 0);
    return total;
  }

//16. Create a function that determines whether an input value is omnipresent for a given array.
function isOmnipresent(arr, val) {
    return arr.every(subarr => subarr.includes(val));
  }
  
//17. Create a function that returns true if the first array is a subset of the second. Return false otherwise.
function isSubset(arr1, arr2) {
    return arr1.every(item => arr2.includes(item));
  }

//18. Given an array and an integer n, return the sum of the first n numbers in the array.
function sliceSum(arr, n) {
    if (n >= arr.length) {
      return arr.reduce((sum, num) => sum + num, 0);
    } else {
      return arr.slice(0, n).reduce((sum, num) => sum + num, 0);
    }
  }

//19. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(word) {
    let result = [];
    let current = '';
    for (let i = 0; i < word.length; i++) {
      current += word[i];
      result.push(current);
    }
    return result;
  }

//20. Given a word, write a function that returns the first index and the last index of a character.
function charIndex(word, char) {
    let indices = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === char) {
        indices.push(i);
      }
    }
    if (indices.length === 0) {
      return undefined;
    }
    return [indices[0], indices[indices.length - 1]];
  }
  
  