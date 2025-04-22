function findShortestString(arr) {
  // type your code here

  if (arr.length > 1) {
    // sort in ascending order, by length, sort() should return a number.
    const sortedArray = arr.sort((str1, str2) => str1.length - str2.length);

    return sortedArray[0];
  } else {
    return arr[0];
  }

}

// Time complexity is O(n logn) => faster than O(n) as input size grows. 20 steps.

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(["flower", "juniper", "lily", "dandelion"]);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// the array contains the strings, i need to find the shortest one. 
// min length of array is 1. return the string.
// if there is more than one string of that length, return the first one.
// 


// And a written explanation of your solution
// i can first check ifthe length of array is 1 , if so return the first string.
// then i can create a variable to hold the shortest string and set it to the first string.
// then i can sort the array by the length , and return first one.
