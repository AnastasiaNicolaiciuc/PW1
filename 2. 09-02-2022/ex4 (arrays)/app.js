/* Задача №4.
Напишите функцию sumInputNumbers(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */
const list = [];
const sumInputNumbers = () => {
    const input = prompt("Введите число");
    if (!isNaN(Number(input))) {
        list.push(input);
        sumInputNumbers();
    }
}
sumInputNumbers();
console.log(list);

const sum = list.reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0);
console.log(sum);


