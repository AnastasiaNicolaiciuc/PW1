/* Задача №7.
Добавить в документ 10 ссылок (внешние которые начинаются на `https://` и внутренние в которых не содержится `https://`)
Цвет текста внешних ссылок сделать красным.
Примеры:
внешняя ссылка `http://google.com`
внутренняя ссылка `directory/page.html`
 */

const links = document.querySelectorAll("a");

for (const link of links) {
    if (link.href.startsWith("http://") || link.href.startsWith("https://")) {
        link.style.color = "red";
    }
}