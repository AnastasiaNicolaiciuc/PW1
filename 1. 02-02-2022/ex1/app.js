/* Задача №1.
Переменная n хранит число от 0 до 9. Используя оператор swiych,
написать скрипт, который в зависимости от числа будет выводить слово 
(Например если n = 3, то будет выводиться слово "три")
 */

const number = 3;

switch (number) {
    case 0:
        console.log("Ноль");
        break;
    case 1:
        console.log("Один");
        break;
    case 2:
        console.log("Два")
        break;
    case 3:
        console.log("Три")
        break;
    case 4:
        console.log("Четыре");
        break;
    case 5:
        console.log("Пять")
        break;
    case 6:
         console.log("Шесть")
         break;
    case 7:
        console.log("Семь");
        break;
    case 8:
        console.log("Восемь")
        break;
    case 9:
        console.log("Девять")
    default:
        console.log("Нет такого числа!")
}

