/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */


const myString = 'box';
const myNumber = 10;
const isTrue = true;
const isNull = null;
const isUndefined = undefined;
const isObject = {
    book: 'Little prince',
    date: 1996
};
const isArray = [2, 4, 5];


console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof isTrue);
console.log(typeof isNull);
console.log(typeof isUndefined);
console.log(typeof isObject);
console.log(typeof isArray);

