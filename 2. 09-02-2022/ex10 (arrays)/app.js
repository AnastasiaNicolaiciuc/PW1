/* Задача №10.
Задан массив [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1]
Напишите функцию uniqueSorted, которая удалит дубликаты из массива и вернет
отсортированный по возрастанию массив из уникальных значений
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
const uniqueSorted = (array) => {
    const uniqueArray = Array.from(new Set(array));
    uniqueArray.sort((a, b) => a - b)
    return uniqueArray;
}
console.log(uniqueSorted(array));



