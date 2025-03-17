let numbers: number[] = [1, 2, '3', 4, 5]; //wrong
let numbers1: number[] = [1, 2, 3, 4, 5]; //correct

numbers1.forEach(n => n.toPrecision(2));
