console.log("1. What type?")
console.log(2)
console.log(3)
console.log(1)

console.log("--------------------")

console.log("2. Comparison")
console.log(3 == "3")
console.log(3 === "3")

console.log("--------------------")

console.log("3. Not")
const myVar = true
console.log(myVar ? 'good morning' : 'good evening')

console.log("--------------------")

console.log("4. Short Circuit")
let zero  = '' || false || 0
let seven = 75 && 'nine' && 7
let firstName = '' || 'John' || 0
let emptyStr  = '' && false && 'Hello World'
console.log(zero, seven, firstName, emptyStr);