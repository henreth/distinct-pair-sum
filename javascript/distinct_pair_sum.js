// Given an input array and a target value k, return all distinct pairs of consecutive numbers that add up to k. A pair is distinct if no other pair contains the same numbers.

// iterate through arr
// if sum(i,i+1) == k, move on
// else break
// if sum(i,i+1) not in newArr, add to newArr

function distinctPairSum(arr, k) {
  let newArr = []
  arr.map((i,index)=>{
    if (arr[index] + arr[index+1] ===k) {
      let pair = [arr[index],arr[index+1]]
      console.log(pair)
      console.log(newArr)
      if (newArr.length===0){
        newArr.push(pair)
      } else if (newArr.length!=0){
        newArr.map(pairing=>{
          // console.log(pair,'-',pairing)
          if ((pairing[0]===pair[0] && pairing[1]===pair[1]) || (pairing[1]===pair[0] && pairing[0]===pair[1])){
          } else {
            newArr.push(pair)
          }
        })
      }
    }
  })
  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
