// const array = [1, 2, 3]

// const [value1, ...valueEnd] = array

// console.log(value1)
// console.log(valueEnd)

classroom1 = {
  hasTeachingAssistant: true,
  classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas'],
}
classroom2 = {
  hasTeachingAssistant: false,
  classList: ['Ronda', 'Sama', 'Barry', 'Xavi', 'Marc'],
}

function getStudents({ hasTeachingAssistant, classList }) {
  let teacher
  let teachingAssistant
  let students

  if (hasTeachingAssistant) {
    ;[teacher, teachingAssistant, ...students] = classList
  } else {
    ;[teacher, ...students] = classList
  }
  return students
}

console.log(getStudents(classroom1))
console.log(getStudents(classroom2))
