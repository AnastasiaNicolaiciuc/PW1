/* Задача №9
Напишите код который при открытии страницы запросит у пользователя его
имя(prompt). После ввода имени, вывести ему сообщение `Привет ${name}`. Спросить у
пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`, если его
ответ Да и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет.
*/

const nameInput = prompt("Введите своё имя");

alert(`Привет ${nameInput}`);

const learnJavaScript = confirm ("Знаком ли ты я языком JavaScript");

if (learnJavaScript) {
    alert("Молодец");
} else {
    alert("Можно начать изучение прямо сейчас");
}