const c = parseInt(prompt("Введите число"));

if (c <= 0)  {
console.log("Это не натуральное число");
} else {   
const square = Math.pow(c, 2);
let isHupo = false;

// 7^2 => 1^2 + 1^2; 1^2 + 2^2; ... 1^2 + 6^2;
// 7^2 => 2^2 + 1^2; ... 2^2 + 6^2

for (let i = 1; i < c; i++) {
    for (let j = i; j < c; j++) {
        if (Math.pow(i, 2) + Math.pow(j, 2 ) === square) {
            console.log("Число " + с + " гипотенузное");
          }
          }
          }

          if (!isHupo) {
            console.log("Число " + с "не гипотенузное");
            } 
            }