function hasTargetSum(array, target) {
  // Write your algorithm here
  let sum =[]
  for (let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if (array[i]+array[j]===target){
        sum.push(array[i])
        sum.push(array[j])
      }
    }
  }
  console.log(sum)
  return sum.length!==0;
}

/* 
  Write the Big O time complexity of your function here
  Since we are writting a loop inside another loop our Big O complexity is O(n*n)
*/

/* 
  Add your pseudocode here
  iterate over the array
    for every array get all the possible combinatiions sum
    if the combination sum is equal to the target return true
    else false
*/

/*
  Add written explanation of your solution here
  hasTargetSum takes in two arguments an array and a target number
  if there is a combination of elements inside our array that add up to the target it returns true
  else it returns false
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
console.log(hasTargetSum([22, 19, 4, 6, 30], 25))

module.exports = hasTargetSum;
