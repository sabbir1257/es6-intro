// breakup with var
// no more use of var
// let : let it to reassign
// const : do not allow it to reassign
 
let money = 20;
money = 25;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + ' potas potas';
console.log(message);

const numbers = [12, 45, 25, 65];
// reassigh is not allawed
// numbers  = [12, 22, 35, 87];
numbers.push(11);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'usman',
    roll: 12
}
// student = {name: 'saymoon'}
student.name = 'saymoon'

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}