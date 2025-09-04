// Problem Statement
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Input: s = "anagram", t = "nagaram"
// Output: true

// Method 1 : Sorting Method - but it is not best method because it gives time complexity is O(n log n)
// function validAnagram(s,t){
//     if (s.length !== t.length) return false;
//     return s.split("").sort().join("")===t.split("").sort().join("")
// }
// console.log(validAnagram("anagram","nagaram"))

// Method 2 - Using frequency count ( Hash Table)
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let hashmap = {};
  for (let char of s) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }
  for (let char of t) {
    if (!hashmap[char]) return false;
    hashmap[char]--;
  }
  return true;
}
console.log(validAnagram("anagram", "nagaram"));
