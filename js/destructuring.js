const fish ={
    name: 'King Hilsa',
    address: 'chanpur',
    color: 'silver',
    phone: '01995794410',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

console.log(phone);

const {age, name} = {name: 'sabbir', age:20};
console.log(age, name);


const {address} = fish;
console.log(address); 


// array destructuring 
const [first, another] = [44, 50, 85, 999];
console.log(first, another);


const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
// console.log(notun);

function getNames(){
    return ['sabbir', 'usman']
}

const [baba, cahcah] = getNames();
// console.log(cahcah, baba);

const division= num1, num2 => division(4,2)
console.log(num1 /num2)