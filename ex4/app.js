/*Задача №4
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым
символом. 
*/

const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
alert(ucFirst("вася"));
