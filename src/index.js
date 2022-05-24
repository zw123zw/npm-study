const _ = require('lodash')

const data = require('./data')

var without = _.without([1, 2, 3], 1)

console.log(without)
console.log(data)

for (let i = 1; i < 10; i++) {
  console.log(i)
}

const aa = [1, 2, 3].reduce((prev, next) => {
  prev[next] = 1
  return prev
}, {})
console.log(aa)
