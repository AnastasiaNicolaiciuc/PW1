/* Задача №5.
Напиши функцию convert(fn, array), которая принимает на вход функцию и массив, и
обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
 */
const convert = (fn, array) => {

    return array.map(fn);
}

const fn = (item) => {
    return item * 2;
}

console.log(convert(fn, [1, 2, 3, 4, 5, 6]));