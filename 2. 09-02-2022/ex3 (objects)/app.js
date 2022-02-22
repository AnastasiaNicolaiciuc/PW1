/* Задача №3.
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта
obj на 2.
Например:
// до вызова функции
let menu = {
width: 200,
height: 300,
title: "My menu"
};
multiplyNumeric(menu);
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую
изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
 */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] === "number") {
            obj[objKey] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);