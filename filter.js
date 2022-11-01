const numbers = [80, 50, 84, 28, 32, 53, 63, 12, 45, 23, 54, 12, 14, 53, 76];
const bigNumbers = numbers.filter(number => number > 50);
const smallNumbers = numbers.filter(number => number < 50);
// console.log(bigNumbers, smallNumbers);

const products = [
    { brandname: 'Apple', type: 'Phone', model: 'Iphone-14 Pro Max', price: 1200, color: 'Black' },
    { brandname: 'Apple', type: 'Laptop', model: 'Max Book Pro-15', price: 2000, color: 'White' },
    { brandname: 'Samsung', type: 'Phone', model: 'Glaxsy Note 15', price: 1100, color: 'Gray' },
    { brandname: 'Hp', type: 'Laptop', model: 'Pavilion-50', price: 1400, color: 'Pink' },
    { brandname: 'Mi', type: 'Phone', model: 'Mi Note-13', price: 800, color: 'Light Blue' },
    { brandname: 'Mi', type: 'Phone', model: 'Mi Note-13', price: 800, color: 'White' },
];

// filter 
const expensiveProduct = products.filter(product => product.price > 1000);
// console.log(expensiveProduct);
const pholeList = products.filter(phone => phone.type == 'Phone');
const productColor = products.filter(color => color.color == 'White');
// console.log(productColor);

// find
// find get the output in one element : jemon ekhane white 2 ta ache but result show only one.
const findWhite = products.find(pink => pink.color == 'White');
console.log(findWhite);