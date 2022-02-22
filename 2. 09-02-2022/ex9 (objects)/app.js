/* Задача №9.
Задан объект
const weekDays = {
“Luni”: “Mo”,
“Marti”: “Tu”,
“Miercuri”: “We”,
“Joi”: “Th”,
“Vineri”: “Fr”,
“Simbata”: “Sa”,
“Duminica”: “Su”
}
Напишите функцию которая получит как параметр этот объект и вернет следующий
объект
const weekDays = {
“Mo”: “Luni”,
“Tu”: “Marti”,
“We”: “Miercuri”,
“Th”: “Joi”,
“Fr”: “Vineri”,
“Sa”: “Simbata”,
“Su”: “Duminica”
}
Придумайте подходящее название для этой функции.
 */

const weekDays = {
    'Luni': 'Mo',
    'Marti': 'Tu',
    'Miercuri': 'We',
    'Joi': 'Th',
    'Vineri': 'Fr',
    'Simbata': 'Sa',
    'Duminica': 'Su',
}
const modificatedWeekDaysList = {}

Object.entries(weekDays).forEach(([key, value]) => {
    modificatedWeekDaysList[value] = key
})
console.log(modificatedWeekDaysList)

