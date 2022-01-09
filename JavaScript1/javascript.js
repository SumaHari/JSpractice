//  HELLO WORLD  ---1
console.log('Hello World');

alert("Heelo  World !");

document.write('Hello, World!');


// ADD TWO NUMBERS ---2

const num1 = 5;
const num2 = 4;
const sum = num1 + num2 ;
console.log('The sum of ' +  num1  + 'and' +  num2  + 'is:' +sum );


//  READING INPUT FROM THE USER ---3

const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//  FINDING SQAREROUTE  -----4
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);


(5)
const number1 = 5; 
const number2 = -6;
const number3 = 'suma';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);

// AREA WHEN BASE AND HEIGHT IS SAME -----6

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');


const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue}`);


// JavaScript program to find the area of a triangle -----7

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

 Semi-perimeter
const s = (side1 + side2 + side3) / 2;

// AREA 
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);

// SWAP 2 NUMBERS USING TEMPORARY VARIABLE -----8
 
let a = prompt(' Enter the first variable: ');
let b = prompt(' Enter the second variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

(9)
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

// using destructuring assignment.....9
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// (10)
var a = parseInt(prompt('Enter the first variable: '));
var b = parseInt(prompt('Enter the second variable: '));

a = a + b; 
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// (11)
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);   

// KILOMETERS INTO MILES ----12
const kilometers = prompt("Enter value in kilometers: ")
const factor = 0.621371
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

// How to generate a random number  ------14
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);

// to check number is positive or negative ----15

const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

//  check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}

// to check the number is even or odd -----16

const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}

// to find the largest number among 4 numbers----17

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
const num4 = parseFloat(prompt("Enter fourth number: "));


const largest = Math.max(num1, num2, num3, num4);

console.log("The largest number is " + largest);

// make a simple calculator -----18

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
// operator : did not understand;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator ==  '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

// to check the factors of number  ---19
const num = prompt('Enter a positive number: ')

for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        console.log(i);
    }
}
console.log(`The factors of ${num} is:`);

// sorting words in alphabetical order -----20
const string = prompt('Enter a sentence: ');

const words = string.split(' ');
words.sort();
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}

// to find the ASCII value ----21
const string = prompt('Enter a character: ');
const result = string.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);

// to replace a charecter of a string ----22

const string = 'I haVe a black dress and a black car';
const newText = string.replace('black', 'blue');
console.log(newText);

// to capitalize first letter -----22

function capitalizeFirstLetter(str) {
 const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
const string = prompt('Enter a string: ');
const result = capitalizeFirstLetter(string);

console.log(result);

// check particular key exists or not -----23

const person = {
    id: 1,
    name: 'Suma',
    age: 26
}
const hasKey = 'address' in person;

if(hasKey) {
    console.log('The key exist.');
}
else {
    console.log('The key does not exist.');
}

//  to clone the object -----24
const person = {
    name: 'Hari',
    age: 26,
}
const clonePerson = Object.assign({}, person);
console.log(clonePerson);

// changing clone person value 
clonePerson.name = 'Suma';
console.log(clonePerson.name);
console.log(person.name);

// to loop through an object using for...in loop -----25

const student = { 
    name: 'Hari',
    age: 27,
    hobbies: ['cricket', 'music', 'paraglyde'],
};
for (let key in student) { 
    let value;
    value = student[key];

    console.log(key + " - " +  value); 
} 


// to merge two arrays and removing duplicate array -----26

function getUniqueAfterMerge(arr1,arr2){
    let arr = [arr1,arr2];    
     let uniqueArr = [new Set(arr)];  
     console.log(uniqueArr);
}
const array1=[1,2,3,4,6,7,8,9];
const array2=[2,3,5,6,7,8]

 getUniqueAfterMerge(array1,array2);   


// to remove item from an array   -----27

function removeItemFromArray(array,n) {
    const index = array.indexOf(n);

    if(index > -1) {            
        array.splice(index, 1);
    }
    return array;
}
const result = removeItemFromArray([1, 2, 3 , 4, 5, 6 ,8 ,9], 2);

console.log(result);

// to pass parameter to a setTimeout()function    -----29

function daisy(){
    console.log('hello world');
}
setTimeout(daisy,8000);
console.log('this message is shown first');

// to convert an object to a string   -----30

const person = {
    name: 'Suma',
    age: 26
}
const result =  JSON.stringify(person);
console.log(result);
console.log(typeof result);

// to removing white space   -----31

const string ='   hello world  ';
const result = string.split('').join('');
console.log(result);

const s1 = new Date();
console.log(s1);

const result = s1.getTime();
console.log(result);

// to get a random item from an array   -----32

function getRandomItem(arr){
    const randomIndex=(Math.random()*arr.length);
    const item=arr[randomIndex];
    return item;
}

const array = [1,'hello',5,8];
const result=getRandomItem(array);
console.log(result);


// to perform intersection between two arrays using filter method   -----33

function performIntersection(arr1, arr2) {

    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
    return intersectionResult;
}
const arr1 = [1, 2, 3, 5, 9];
const arr2 = [1, 2, 3, 5, 6,7,8];
const result = performIntersection(arr1, arr2);
console.log(result);


// to check if a variable is of function type -----34
function testVariable(variable) {

 if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}
const count = true;
const x = function() {
    console.log('hello')
};
testVariable(count);
testVariable(x);

// to program to convert date to number -----35
const d1 = new Date();
console.log(d1);

const result = d1.getTime();
console.log(result);

// to get the dimensions of an image   -----36
const img = new Image();

img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

img.onload = function() {
  console.log('width' + this.width)
  console.log('height'+ this.height);
}


// to insert an item at a specific index into an array  -----37

function insertElement() {
    let array = [1, 2, 3, 4, 5];
    let index = 2;
    let element = 8;

    array.splice(index, 0, element);
    console.log(array);
}
insertElement();

// for integer Value Between Two Numbers   -----38

const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

const a = Math.floor(Math.random() *(max - min + 1))+ min;

console.log(`Random value between ${min} and ${max} is ${a}`);

// to check if a variable is undefined or null   -----39
function checkVariable(variable) {
    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(2);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);


//to check if a string starts with another string   -----40

const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// to trim a string ------41

const string = ' Hello frnds ';

const result = string.trim();

console.log(result);

// to check if a string contains a substring ------42
  
const str = prompt('Enter a string:  ');
const checkString = prompt('Enter a string you want to check:');

if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}
// to perform string comparison ------43

const strng1 = 'JavaScript Program';
const strng2 = 'javascript program';

// compare both strings
const result = strng1.toUpperCase() === strng2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


  //  to split array into smaller chunks   -----43

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5];
const chunk = 3;
splitIntoChunk(array, chunk);

// to verify if a number is a float or integer value   ----44

function checkNumber(a) {


    if(typeof a == 'number' && !isNaN(a)){
        if (Number.isInteger(a)) {
            console.log(`${a} is integer.`);
        }
        else {
            console.log(`${a} is a float value.`);
        }
    
    } else {
        console.log(`${a} is not a number`);
    }
}

checkNumber('hello');
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);

//to reverse a string  ------45

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

