/* Задача №9.
Напишите функцию showNotification(options), которая создаёт уведомление:
<div class="notification">{{ message }}</div> c заданным содержимым.
Уведомление должно автоматически исчезнуть через 1,5 секунды.
Пример объекта options:
// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
top: 10, // 10px от верхней границы окна (по умолчанию 0px)
right: 10, // 10px от правого края окна (по умолчанию 0px)
message: "Hello!", // HTML-уведомление
className: "welcome" // дополнительный класс для div (необязательно)
});
Используйте CSS-позиционирование для отображения элемента в заданных
координатах.
 */

const showNotification = (options) => {
    const div = document.createElement('div');

    div.innerText = options.message;
    div.style.position = "fixed";
    div.style.top = `${options.top}px`;
    div.style.right = `${options.right}px`;
    document.body.appendChild(div);

    setTimeout(() => {
        document.body.removeChild(div);
    }, 1500)
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    message: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});
