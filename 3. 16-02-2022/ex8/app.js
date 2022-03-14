/* Задача №8.
Добавить в странице нумерованный список(ol), поле ввода имени(input) и кнопку. При нажатии на кнопку:
1. значение из инпута добавляется в список (в конце)
2. инпут очистить от текста
3. добавление будет работать только если в инпут что то введено. если в инпуте ничего нет, кнопка должна быть неактивной.
При нажатии на li, выводить алерт с текстом который содержится внутри него.
 */
const button = document.createElement("button");
const input = document.createElement("input");
const list = document.createElement("ol");

button.innerText = "+";
button.disabled = true;

button.addEventListener("click", () => {
    const row = document.createElement("li")

    row.innerText = input.value;
    list.appendChild(row);

    input.value = ""
    button.disabled = true;

    row.addEventListener("click", () => {
        alert(row.innerText);
    })
})

input.addEventListener("input", () => {
    button.disabled = input.value === "";
})
document.body.append(list, input, button);

