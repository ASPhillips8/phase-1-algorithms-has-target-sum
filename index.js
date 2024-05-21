function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j< array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false
} 
// look through each number in array
// look through the rest of the array 
// check if first number plus second number equal target
// return true


/* 
  Write the Big O time complexity of your function here
*/ 
      // On**2
/* 
  Add your pseudocode here
*/ // for loop i=0, i<array.length; i++  - outer loop
   // for loop j= i+1  j<array.length; j++ - inner loop
   // array i number + array j number === target 
   // return true

/*
  Add written explanation of your solution here


  //  The first for is the outer loop. It is going through the loop starting at the first value in the array or index zero. Each time it goes through the array it will increase by one for the length of array expect for the last Number. For each element variable J iterates through the remaining numbers like outer loop. J starts at index of i+1 to ensure that pairs are not revisted. Withing the inner loop the sums of the currnet element at index i and index j are found. If the sum equals the target the function immediately returns a true. The return for not matching is placed out of the loops. Indicating that no pair was found.

  */
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
