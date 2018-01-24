require('babel-polyfill')

const arr = [
  { key: 1 },
  { key: 2 },
  { key: 3 }
]

const results = arr.map(async obj => {
  return obj.key
})

Promise.all(results)
.then(completed => {
  console.log(`Results: ${completed}`)
})
