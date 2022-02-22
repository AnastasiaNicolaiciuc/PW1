/* Задача №8.
Задан объект
const weekDays = {
“Mo”: “Понедельник”,
“Tu”: “Вторник”,
“We”: “Среда”,
“Th”: “Четверг”,
“Fr”: “Пятница”,
“Sa”: “Суббота”,
“Su”: “Воскресенье”,
}
Напишите функцию translate которая переводит названия дней на румынском
 */

const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье',
}
const romanianWeekDays = {"Понедельник": "Luni", "Вторник": "Marti", "Среда": "Miercuri", "Четверг": "Joi", "Пятница": "Vineri", "Суббота": "Simbata", "Воскресенье": "Duminica",};

const translate = (obj, romanianWeekDays) => {
    for (const objKey in obj) {
        let ru = obj[objKey];
        let en = romanianWeekDays[ru];
        obj[objKey] = en;
    }
}
translate(weekDays, romanianWeekDays);
console.log(weekDays);


