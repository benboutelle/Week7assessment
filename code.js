//1
let array = [1, 42, -69, 13, 54, -81, 4]
let sumZero = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(sumZero)
// false 
//  run O(n^2)
//space O(1)
//2
const uniqueChar = (word) => {
    let unique = new Set([])
    for (let i = 0; i < word.length; i++) {
      unique.add(word[i])
    }
    return unique.size === word.length
}
console.log('YOmama')
const uniqueChar2 = (str) => {
    let unique = new Set(str)
    
    return unique.size=== str.length ? true:false
}
console.log(uniqueChar2('hi'))
//true
// run O(1)
// space O(n)

//3
let string = ("The quick brown fox jumps over the lazy dog")
const  pangramSentence = (string) => {
  let strArr = string()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (let i = 0; i<alphabet.length; i++){
    if(strArr.indexOf(alphabet[i])<0){
      return false
    }

  }
    return true
 }
 //true
// run O(n)
//space

//4
const  findLongestWord = (str) => {
  return str.length
}
findLongestWord('hi hello')

// 5
//run O(1)
//space O(1)