//1
/*
let name = prompt("jake je tvoje jméno?");
console.log("ahoj " + name);

let numberForSum1 = Number(prompt("zadej první číslo:"));
let numberForSum2 = Number(prompt("zadej druhé číslo:"));
let sum = numberForSum1 + numberForSum2;
console.log("součet je " + sum);

let number1 = Number(prompt("zadej první číslo:"));
let number2 = Number(prompt("zadej druhé číslo:"));

if (number1 > number2) {
    console.log(number1 + " je větší než " + number2);
} else if (number1 < number2) {
    console.log(number2 + " je větší než " + number1);
} else {
    console.log(number1 + " a " + number2 + " jsou stejná");
}

//2
let numberEvenOrOdd = Number(prompt("zadej číslo:"));
if (numberEvenOrOdd % 2 === 0) {
    console.log("číslo je sudé");
} else {
    console.log("číslo je liché");
}

let age = Number(prompt("Kolik je ti let?"));

if (age >= 18) {
    console.log("Uživatel je plnoletý.");
} else if (age >= 15) {
    console.log("Uživatel bude plnoletý za " + (18 - age) + " let.");
} else {
    console.log("Uživatel je mladší 15 let.");
}


//3
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//4
let names = ["Petr", "Karel", "Jana", "Pavel", "Josef"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.sort();

let numbers = [];
for (let i = 0; i < 6; i++) {
    let x = Math.random();
    numbers.push(x);
}
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("průměr je " + sum / numbers.length);

//5
function greet(name) {
    console.log("ahoj " + name);
}

function numSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                let tempor = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tempor;
            }
        }
    }
}

//6
let person = {
    name: "Jan",
    age: 25,
    introduction: function() {
        return "Ahoj, jmenuji se " + this.name + " a je mi " + this.age + " let.";
    }
};
console.log(person.introduction());

let car = {
    brand: "Škoda",
    model: "Octavia",
    year: 2012,
    description: function() {
        return this.brand + " " + this.model + ", ročník " + this.year + ".";
    }
};
console.log(car.description());

let books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

function printBookTitles(bookList) {
    bookList.forEach(function(book) {
        console.log(book.title);
    });
}

printBookTitles(books);
*/
//7
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculate() {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
}