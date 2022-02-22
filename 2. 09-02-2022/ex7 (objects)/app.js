/* Задача №7.
Создайте объект person со следующей структурой:
{
name: `Person`,
age: 123,
salary: 1542.33,
contacts: {
phone: `112`,
email: ‘email@domain.com’
},
address: `Moldova`
}
Создайте по одной функции get для каждого поля объекта (функции/методы должныдолны
принадлежать объекту)
 */

const person = {
    name: 'Person',
    get fullName () {
        return this.name = 'Person 1'
    },
    age: 123,
    get changedAge () {
        return this.age + 321
    },
    salary: 1542.33,
    get changedSalary () {
        return this.salary * 2
    },
    contacts: {
        phone: '112',
        get newNumber () {
            return this.phone = '+37345372'
        },
        email: 'email@domain.com',
        get newEmail () {
            return this.email = 'email@domain22.com'
        },
    },
    address: 'Moldova',
    get newCountry () {
        return this.address = 'Italy'
    },
}

console.log('Полное имя Персоны:', person.fullName);
console.log('Изменённый возраст:',person.changedAge);
console.log('Повышенная зарплата:',person.changedSalary);
console.log('Новый номер телефона:',person.contacts.newNumber);
console.log('Новый адрес электронной почты:',person.contacts.newEmail);
console.log('Новое проживание:',person.newCountry);