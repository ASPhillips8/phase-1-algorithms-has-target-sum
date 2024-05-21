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
// take first number in array
// look at second number in array 
// check if first number plus second number equal target
// return true if match
// if no match keep first number and move and compare next number
// continue for length of array checking if target sum is obtained
// if no match by end of collection change starting point. to second number
// repeat step above until match or at end of array exhausting all starting points


/* 
  Write the Big O time complexity of your function here
*/ 
      // On**2
/* 
  Add your pseudocode here
*/ // loop through array starting at index 0
   // create const i
   // go for length of array i < array.length
   // each pass increase by 1
   //  each pass compare with first start of new array 
   // create const j
   //  start at second index j = i + 1
   //  go through j < array.length
   //  increase each pass by 1
   //  each pass compare with first start of nested loop
   // array i number + array j number === target 
   // return true
   // if not found return at end of outer loop 
   // used sock example in readme 

/*
  Add written explanation of your solution here


  //  The first for is the outer loop. It is going through 
  the loop starting at the first value in the array or index zero. 
  Each time it goes through the array it will increase by one for the 
  length of array expect for the last Number. For each element variable 
  J iterates through the remaining numbers like the outer loop. J starts at 
  index of i+1 to ensure that pairs are not revisited. Withing the inner
   loop the sums of the current element at index i and index j are found.
    If the sum equals the target the function immediately returns a true.
     The return for not matching is placed out of the loops. Indicating 
     that no pair was found.

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
