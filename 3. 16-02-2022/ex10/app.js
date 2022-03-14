/* Задача №10.
Добавьте в страницу 2 элемента: field и ball
<div id=”field”>
<div id=”ball”></div>
</div>
Установите при помощи CSS размеры поля (600*400) и размеры мяча (50*50) Напишите код JS который расположит мяч в центр поля.
Примечания:
● код должен работать для любых размеров поля и мяча
● попробуйте расположить мяч в каждом из углов поля
 */


const ball = document.getElementById('ball');
ball.style.position = 'absolute';
ball.style.top = "calc(50% - 25px)";
ball.style.left = "calc(50% - 25px)";

const field = document.getElementById('field');
field.style.position = 'relative';