/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */


15 // exp st


//st
const myObject = {//exo\p
  x: 10,
  y: true,
}

myObject.z = 'abc'  //st ex

delete myObject.x  // ex st

let newVariable  //st

newVariable = 30 + 5   //exp st

console.log(newVariable) //ex st
//st
if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)   //ex st
}
