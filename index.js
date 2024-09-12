// const message = "Hello " + "World" + "!"; 
// console.log(message); 

// let result; 

// result = 5 + "5"; 
// console.log(result);


// const message = "KHARKIV THE BEST CITY!";

// console.log(message); 
// console.log(message.length); 

// console.log(message.toLowerCase());
// console.log(message.toUpperCase());

// console.log(message.indexOf("H"));

// console.log(message.includes("K"));

// console.log(message.startsWith("K")); 

// console.log(message.endsWith("!")); 

// console.log(message.trim());

// const userName = "Maksym";
// const userLastName = "Durikhin";
// const userAge = 15;
// const message = `Hello! My name is ${userName}, I'm ${userAge} years old.`;

// console.log(message);



//! ЗАВДАННЯ 1

//! Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
//!  Використовуючи метод .length, вивести в консоль кількість символів у рядку.

let myData = "Maksym Durikhin"

console.log(myData.trim().length);

//! ЗАВДАННЯ 2

//! Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .toUpperCase(),
//!  перетворити рядок у верхній регістр та вивести результат в консоль.


console.log(myData.toUpperCase()); 



//! ЗАВДАННЯ 3

//! Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(),
//!  знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.


console.log(myData.indexOf(" ")); 


//! ЗАВДАННЯ 4

//! Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.

let userEmail = "      mdurihin@gmail.com       "

console.log(userEmail.trim()); 



// HOMEWORK

let email = prompt("Enter email");

if (email.includes("@")) {
    alert("Email is correct!");
    console.log("User's email is correct. It length is " + email.trim().length);
    console.log("User's email is " + email.trim());
} else {
    alert("Email is incorrect!");
    console.log("User's email isn't correct.");
}

