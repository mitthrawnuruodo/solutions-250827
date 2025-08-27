# Lesson Task: Functions in JavaScript

## 1. Function Declarations & Calls
Write a function declaration called `welcome` that prints `"Welcome to JavaScript!"` to the console.
* Call it once to make sure it works.

## 2. Function Parameters & Arguments
Create a function called `greetUser` that takes one parameter (the user’s name) and prints `"Hello, [name]!"`.
* Call it with your own name.
* Call it again with a different name.

## 3. Multiple Parameters & Default Values
Make a function called `makeSandwich` that takes two parameters: `filling` and `bread`.
* If no bread is provided, use "white bread" as a default.
* Print a message like `"Making a tuna sandwich on white bread"`.
* Test it with two arguments and with just one argument.

## 4. Positional Arguments
Write a function called `introduce` with two parameters: `firstName` and `lastName`.
* Call it with `"John"`, `"Doe"`.
* Call it with only `"Jane"`.
* Observe what happens to the missing parameter.

## 5. The Rest Operator (`...`)
Create a function called `listItems` that uses the rest operator (`...items`) to collect any number of strings.
* Inside, print `"You listed:"` followed by all the items.
* Try calling it with 2 items, then 5 items.

## 6. Function Expressions
Store a function in a variable called `multiply` that takes two numbers and returns their product.
* Call it with 3 and 7 and print the result.
* Notice that this function is not hoisted — what happens if you try to call it before it is defined?

## 7. Functions as Values

Write a function expression called `whisper` that prints a message in lowercase.
* Store it in a variable.
* Pass it into another function called `repeatTwice`, which should call the given function **two times**.

## 8. Arrow Functions

Write an arrow function called `square` that takes a number and returns its square.
* Call it with 4.
* Then, use an arrow function inline inside an array method:
```js
[2, 4, 6].map(/* your arrow function here */);
```
to double all the numbers.


## 9. Returning Values

Create a function declaration called `maxOfTwo` that takes two numbers and returns the larger one.
* Test it with `(10, 3)` and `(5, 9)`.

## 10. Functions with HTML Events

Make two buttons in HTML:
```html
<button id="colorBtn">Change Color</button>
<button id="jsBtn">Bind via addEventListener</button>
```
Then write two versions in JavaScript:
1. A function declaration `changeColor` that sets the button’s background color to `"lightblue"`. Bind it using the `onclick` attribute in HTML.
2. A function expression stored in a variable `logClick`, which logs `"Button was clicked!"` to the console. Bind it dynamically in JavaScript with `addEventListener`.
