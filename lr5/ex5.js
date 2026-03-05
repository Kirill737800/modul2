
// 5.1 Напишите функцию, принимающую на вход массив вещественных чисел и возвращающую количество элементов, равных предыдущему элементу.
function countEqualPrevious(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
    }

    return count;
}

// 5.2 Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// состоящий из сумм отрицательных элементов соответствующих
// столбцов матрицы.
// [
//     [1, -2, 3],
//     [-4, 5, -6],
//     [7, -8, 9]
// ] => [-4, -10, -6]
function sumNegativeInColumns(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const cols = matrix[0].length;
    let columnSums = new Array(cols).fill(0); // [0, 0, 0]

    // Для каждого столбца суммируем отрицательные элементы
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] < 0) {
                columnSums[j] += matrix[i][j];
            }
        }
    }

    return columnSums;
}

console.log("Вариант 5: Суммы отрицательных элементов столбцов");
console.log("Матрица 3:", sumNegativeInColumns(matrix3));
console.log("Матрица 1:", sumNegativeInColumns(matrix1));
console.log();