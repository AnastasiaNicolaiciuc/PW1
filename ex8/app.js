/* Задача №7
Напишите код который проверит правильность username и password и выводит
следующие сообщения:
- Привет, если совпадает username и password
- Неправильный пароль если username введен правильно а пароль нет
- Неправильный username, если введен неправильный username
- Ошибка Валидации, если ничего не введено
PS: На практике не делать такое никогда (писать пользователю что он ввел неверно,
username или password)
*/

const username = prompt("Введите имя пользователя");
const password = prompt("Введите пароль пользователя");
const correctUserName = "admin";
const correctPassword = "admin";

if (!username || !password) {
    alert("Поля пустные. Введите их пожалуйста");
} else if ((username === correctUserName) && (password === correctPassword)) {
    alert("Привет");
} else if (username !== correctUserName) {
    alert("Введённо не верное имя пользователя!");
} else {
    alert("Введён не верный пароль");
}