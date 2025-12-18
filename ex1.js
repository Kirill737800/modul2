// 1.
function executel(a, b, c) {
    const numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    return numbers[0] * numbers[1];
}

console.log(executel(10, 8, 7)); // 10 * 8 = 80
console.log(executel(2, 3));     // 3 * 2 = 6
console.log(executel(10, 10));   // 10 * 10 = 100
// 2.
function execute2(name, rank = 'рядовой') {
    return rank + " " + name;
}

console.log(execute2("Петр"));        
console.log(execute2("Владимир", "Капитан"));
// 3.
const fn = function(a, b) {
    return a / b;
}

function execute3(funExp, a, b = 2) {
    return funExp(a, b);
}

console.log(fn(10, 2));           // 5
console.log(execute3(fn, 10, 2));  // 5
console.log(execute3(fn, 10));     // 5
// 4.
function execute4(a) {
    if (!Number.isInteger(a)) {
        console.log("Число не целое");
        return;
    }
    
    if (a % 2 == 0) {
        return (x => x * x);
    } else {
        return (x => Math.pow(x, 3));
    }
}

console.log(execute4(13.2));    // Ошибка
console.log(execute4(2));       // (x) => x * x
console.log(execute4(3));       // (x) => Math.pow(x, 3)
console.log(execute4(2)(2));    // 4
console.log(execute4(3)(3));    // 9
// 5.
// n! = 1 * 2 * ... * n;
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6

function execute5(n) {
    if (n < 1) return;  
    if (n == 1) return 1;
    return n * execute5(n - 1);
}

console.log(execute5(-10));  
console.log(execute5(1));   
console.log(execute5(2));    
console.log(execute5(3));    
console.log(execute5(4));    