/* Задача №5
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем –
число. Создайте функцию extractCurrencyValue(str), которая будет из такой строки
выделять числовое значение и возвращать его.
*/

const extractCurrencyValue = (str) => str.trim().slice(1);
alert(extractCurrencyValue('$120'));

