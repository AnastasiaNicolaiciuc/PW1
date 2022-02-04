/* Задача №9
Напишите функцию которая определяет и выводит в консоль все делитель
заданного числа.
*/

const dividers = (number) => {
    for (let i = 0; i <= number/2; i++) {
        if (number % i === 0) {
            console.log(`Делители числа ${number} =`, i)
        }
    }
    console.log(`Делители числа ${number} =`, number)
}
dividers(33);