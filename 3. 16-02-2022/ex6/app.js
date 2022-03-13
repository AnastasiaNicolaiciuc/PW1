/* Задача №5.
Добавить в страницу таблицу 8*8. При помощи JS кода закрасить цвет фона чтобы
получилась шахматная доска.
Использовать querySelector*
 */
const table = document.createElement("table");

for (let i = 0; i < 8; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement("td");
        if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
            cell.style.background = "black";
        }

        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.body.appendChild(table);
