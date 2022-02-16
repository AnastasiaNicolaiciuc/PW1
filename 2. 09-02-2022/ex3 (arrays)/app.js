/* Задача №3.
Создать массив и произвести над ним следующие 5 операций:

Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
 */

// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
const styles = ["Джаз", "Блюз"];

console.log(styles);
// 2. Добавьте «Рок-н-ролл» в конец.
styles.push("Рок-н-ролл");
console.log(styles);
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
styles.splice(Math.ceil(styles.length / 2 -1), 1, "Классика");
console.log(styles);
// 4. Удалите первый элемент массива и покажите его.
styles.splice(0, 1);
console.log(styles);
// 5. Вставьте «Рэп» и «Регги» в начало массива.
styles.unshift("Рэп", "Регги");
console.log(styles);