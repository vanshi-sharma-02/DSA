// Method 1 : Brute Force Method
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// Second Method  - Hash Table Method
function twoSum(nums, target) {
  let hashtable = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (compliment in hashtable) {
      return [hashtable[compliment], i];
    } else {
      hashtable[nums[i]] = i;
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
