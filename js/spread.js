const max = Math.max(12, 55, 25, 58);
// console.log(max);

const numbers = [12, 58, 40, 75];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(88);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers]

const numbers4 = [45, 55, ...numbers, 65]