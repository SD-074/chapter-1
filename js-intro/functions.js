const numberValue = 5;

function logger() {
    console.log("Hello world!");
    return "No Hello for world!"
    
}

function sumTowNumbers() {
    console.log(5 + 5);
    // return (3 + 1);
    
    
}


function person(name, age) {
   
    // name is x years old.
    let greetingMsg = `${name} is ${age} old.`
    return greetingMsg
    
}
let personOutput = person("Shay", 28)
console.log(personOutput);




function multi() {

    let firstNumber = sumTowNumbers();
    let result = firstNumber * 2;
    console.log(result);
    
    
}




// multi()

// sumTowNumbers()


// logger;
// logger();

// console.log(logger);
// console.log(logger());



// Function declaration
function greet(name) {
  return 'Hello ' + name + '!';
}

greet('Sarah'); // Wait... nothing happened?

// No! It did. The thing is that our function is returning a value, we need to explicitly do something with it

// console.log(greet('Sarah'));

/* 
In the previous line, greet('Sarah') is an expression that eventually evalutes to the string
Hello Sarah! which we just output
*/

const greetingResult = greet('Anoj');
// console.info(greetingResult);
/* 
We can also simply store the result of a function (as long as it returns something) into a
variable for later use 
*/

// Function expression
const square = function (number) {
  return number * number;
};

const result = square(4);
// console.log(result);

// Arrow function
const add = (a, b) => a + b;
// console.log(add(50, 1000));

// Default parameters
function multiply(a, b = 2) {
  return a * b;
}

// console.log(multiply(10)); // Should be 20 since b defaults to 2
// console.log(multiply(10, 10)); // Should be 100 since b is provided

// Rest parameters or ...ain't nobody got time for that
function sum(...numbers) {
  return numbers.reduce((acc, number) => acc + parseInt(number), 0);
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
