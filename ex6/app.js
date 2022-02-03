/* Задача №6
Используя конструкцию if..else, напишите код, который получает число через prompt, а
затем выводит в alert:
*/

const input = prompt('Введите число');

if (isNaN(Number(input))) {
    alert('Error');
} else if (input > 0) {
    alert(1);
} else if (input < 0) {
    alert(-1);
} else {
    alert(0);
}