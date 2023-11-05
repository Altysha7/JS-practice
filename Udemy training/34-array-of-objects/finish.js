/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [{
        carBrand: "Mers",
        price: 30000,
        isAvailableForSale: true
    }, 
    {
        carBrand: "BMW",
        price: 35000,
        isAvailableForSale: true
    }, 
    {
        carBrand: "Audi",
        price: 28000,
        isAvailableForSale: false
    }]

    cars[3] = {
        carBrand: "Nissan",
        price: 29000,
        isAvailableForSale: true
    }

    console.log(cars)