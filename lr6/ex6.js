//  1.
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonSet = new Set();
    for (const element of arr2) {
        if (set1.has(element)) {
            commonSet.add(element);
        }
    }
    
    return Array.from(commonSet);
}

function findCommonElementsAlt(arr1, arr2) {
    const set1 = new Set(arr1);
    return [...new Set(arr2.filter(element => set1.has(element)))];
}

// 2.
function countOccurrences(arr) {
    const occurrencesMap = new Map();
    
    for (const element of arr) {
        if (occurrencesMap.has(element)) {
            const currentCount = occurrencesMap.get(element);
            occurrencesMap.set(element, currentCount + 1);
        } else {
            occurrencesMap.set(element, 1);
        }
    }
    
    return occurrencesMap;
}

// 3.

class Student {
    #name;
    #group;
    
    constructor(name, group) {
        this.#name = name;
        this.#group = group;
    }
    
    get name() {
        return this.#name;
    }
    
    get group() {
        return this.#group;
    }
    
    getInfo() {
        return `Студент: ${this.#name}, Группа: ${this.#group}`;
    }
}

function countLargestGroup(students) {
    const groupCount = new Map();
    
    for (const student of students) {
        const group = student.group;
        
        if (groupCount.has(group)) {
            groupCount.set(group, groupCount.get(group) + 1);
        } else {
            groupCount.set(group, 1);
        }
    }
    
    let maxCount = 0;
    let largestGroup = null;
    for (const [group, count] of groupCount) {
        if (count > maxCount) {
            maxCount = count;
            largestGroup = group;
        }
    }
    
    return {
        group: largestGroup,
        count: maxCount
    };
}


console.log("=== ЗАДАНИЕ 1 ===\n");
const arrayA = [1, 2, 3, 4, 5, 3, 2, 1, 6];
const arrayB = [4, 5, 6, 7, 8, 4, 5, 9];
const arrayC = ["apple", "banana", "orange", "apple", "grape"];
const arrayD = ["banana", "grape", "kiwi", "melon"];

console.log("Массив A:", arrayA);
console.log("Массив B:", arrayB);
console.log("Общие элементы:", findCommonElements(arrayA, arrayB));
console.log("Общие элементы (альт.):", findCommonElementsAlt(arrayA, arrayB));
console.log();

console.log("Массив C:", arrayC);
console.log("Массив D:", arrayD);
console.log("Общие элементы:", findCommonElements(arrayC, arrayD));
console.log("Общие элементы (альт.):", findCommonElements(arrayC, arrayD));
console.log();

// Демонстрация с пустыми массивами
console.log("Пустые массивы:", findCommonElements([], [1, 2, 3]));
console.log();

console.log("=== ЗАДАНИЕ 2 ===\n");

const testArray1 = [1, 2, 3, 2, 1, 4, 5, 4, 4, 6, 1];
const testArray2 = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];
const testArray3 = [true, false, true, true, false, true];

console.log("Исходный массив:", testArray1);
const occurrences1 = countOccurrences(testArray1);
console.log("Подсчет вхождений:");
for (const [element, count] of occurrences1) {
    console.log(`  ${element}: ${count} раз(а)`);
}
console.log();

console.log("Массив строк:", testArray2);
const occurrences2 = countOccurrences(testArray2);
for (const [element, count] of occurrences2) {
    console.log(`  "${element}": ${count} раз(а)`);
}
console.log();

console.log("Массив булевых значений:", testArray3);
const occurrences3 = countOccurrences(testArray3);
for (const [element, count] of occurrences3) {
    console.log(`  ${element}: ${count} раз(а)`);
}
console.log();

console.log("=== ЗАДАНИЕ 3 ===\n");

// Создаем массив студентов
const students = [
    new Student("Петров Саша", "ИТ-21"),
    new Student("Литвинов Владимир", "ИТ-21"),
    new Student("Рыбникова Жанна", "ИТ-21"),
    new Student("Поляков Иван", "ИТ-22"),
    new Student("Зайцева Анастасия", "ИТ-22"),
    new Student("Зайцев Кирилл", "ИТ-23"),
    new Student("Смирнова Софья", "ИТ-23"),
    new Student("Тарасов Роман", "ИТ-23"),
    new Student("Румянцева Алиса", "ИТ-24"),
    new Student("Романов Алексей", "ИТ-21") 
];

const largestGroupInfo = countLargestGroup(students);
console.log("Самая большая группа:");
console.log(`  Группа: ${largestGroupInfo.group}`);
console.log(`  Количество студентов: ${largestGroupInfo.count}`);