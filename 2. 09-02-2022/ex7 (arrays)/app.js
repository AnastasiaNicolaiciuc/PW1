/* Задача №7.
Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9]. Написать функцию которая возвращает
элементы этого массива, начиная с позиции start по позиции end.
extract(2, 4) вернет [3, 4, 5]
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const extract = (array, start, end) => {
    return array.slice(start, end);
}
console.log(extract(array, 2, 5));
