/* Задача №8.
Задан массив
const colors = [“red”, “green”, “blue”];
Написать функцию
checkColor(color)
которая вернет позицию цвета в массиве если она есть или -1 если цвета нет.
 */

const colors = ["red", "green", "blue"];
const checkColor = (color) => {
    return  colors.findIndex(item => item === color);
}
console.log(checkColor("red"));
console.log(checkColor("green"));
console.log(checkColor("blue"));
console.log(checkColor("black"));