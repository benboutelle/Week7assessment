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
const  pangramSentence = () => {}
// run
//space

//4
const  longWord = () => {}

//run
//space