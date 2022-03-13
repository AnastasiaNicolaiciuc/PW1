// Задача №1. Сразу после открытия документа, установить красный цвет фона страницы.
document.body.style.background = "red";

// Задача №2. Через 3 секунды после загрузки страницы, установить цвет фона в зеленый.
setTimeout(() => {
    document.body.style.background = "green"
}, 3000);

// Задача №3. Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.
const button = document.createElement("button");
button.innerText = "Orange";
button.addEventListener("click", () => {
    document.body.style.background = "orange"
})
document.body.appendChild(button);

// Задача №4. Добавить в странице нумерованный список(ol). После открытия страницы, каждые 2 секунды, в список добавится новый элемент (li) с текстом `Элемент ${i}`. Заполнение списка остановится когда в списке будет 20 элементов. У четных элементов будет зеленый фон а у нечетных фиолетовый.
const ul = document.createElement("ul");

document.body.append(ul);

const showNumber = (index) => {
    const li = document.createElement('li');

    li.innerText = `Элемент ${index}`;

    if (index % 2) {
        li.style.background = "green";
    } else {
        li.style.background = "purple";
    }

    ul.append(li);

    if (index < 20) {
        setTimeout(() => {
            showNumber(index + 1);
        }, 2000)
    }
}

showNumber(0);