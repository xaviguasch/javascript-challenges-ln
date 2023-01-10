const username = Symbol('username')
const password = Symbol('password')

const user = {
  [username]: 'xaviguasch',
  [password]: '1234',
  age: 27,
}

console.log(user.username)
console.log(user.password)
