/* Задача №5.
Добавить в страницу следующие элементы (кнопка, инпут, кнопка)
Задачи:
● При нажатии на `-`, значение из инпута уменьшается на 1
● При нажатии на `+`, значение из инпута увеличивается на 1
● Вручную в инпут вводить нельзя.
● инпут может получить только значения из интервала 0-9
● если в инпут 0, кнопку `-` сделать неактивной
● если в инпут 9, кнопку `+` сделать неактивной
● использовать getElementById
PS: нельзя писать onclick в HTML документе. Весь код должен быть в отдельном JS
файле (это относится ко всем следующим задачам)
 */
const plusButton = document.createElement('button');
const minusButton = document.createElement('button');
const input = document.createElement('input');

plusButton.innerText = "+";
minusButton.innerText = "-";
input.value = '0';
input.readOnly = true;

plusButton.addEventListener("click", () =>{
    minusButton.disabled = false;

    if(Number(input.value) < 9) {
        input.value = String(Number(input.value) + 1);
    } else {
        plusButton.disabled = true;
    }
})

minusButton.addEventListener("click", () =>{
    plusButton.disabled = false;

    if(Number(input.value) > 0) {
        input.value = String(Number(input.value) - 1);
    } else {
        minusButton.disabled = true;
    }
})

console.dir(plusButton);
document.body.append(minusButton, input, plusButton)