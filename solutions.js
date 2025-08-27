/************************************************************
  1) Function Declarations & Calls
  Write a function declaration called `welcome` that prints
  "Welcome to JavaScript!" to the console. Call it once.
*************************************************************/
function welcome() {
  console.log("Welcome to JavaScript!");
}
console.log("1) Function Declarations & Calls");
welcome();

/************************************************************
  2) Function Parameters & Arguments
  Create a function `greetUser(name)` that prints "Hello, [name]!".
  Call it with two different names.
*************************************************************/
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
console.log("\n2) Function Parameters & Arguments");
greetUser("Lasse");
greetUser("Ada");

/************************************************************
  3) Multiple Parameters & Default Values
  `makeSandwich(filling, bread="white bread")`
  Print "Making a [filling] sandwich on [bread]".
  Test with two arguments and with just one argument.
*************************************************************/
function makeSandwich(filling, bread = "white bread") {
  console.log("Making a " + filling + " sandwich on " + bread);
}
console.log("\n3) Default Values");
makeSandwich("tuna", "sourdough");
makeSandwich("cheese");

/************************************************************
  4) Positional Arguments
  `introduce(firstName, lastName)`
  Call with ("John","Doe") and with only ("Jane").
  Observe the missing parameter (undefined).
*************************************************************/
function introduce(firstName, lastName) {
  console.log("Name:", firstName, lastName);
}
console.log("\n4) Positional Arguments");
introduce("John", "Doe");
introduce("Jane");

/************************************************************
  5) Rest Operator (...)
  `listItems(...items)` prints "You listed: " followed by all items.
  Try with 2 items and 5 items.
*************************************************************/
function listItems(...items) {
  console.log("You listed:", items.join(", "));
}
console.log("\n5) Rest Operator");
listItems("pen", "notebook");
listItems("apples", "bananas", "cherries", "dates", "elderberries");

/************************************************************
  6) Function Expressions (and non-hoisting)
  Store a function in `multiply` that returns a * b.
  Call it with (3, 7).
  (If you call it before the line below, you'd get a ReferenceError)
*************************************************************/
// console.log(multiply(3, 7)); // ❌ Would throw in TDZ if uncommented
const multiply = function (a, b) {
  return a * b;
};
console.log("\n6) Function Expressions");
console.log("3 * 7 =", multiply(3, 7));

/************************************************************
  7) Functions as Values
  Create `whisper(msg)` (function expression) that logs msg in lowercase.
  Pass it to `repeatTwice(fn, msg)` which calls it twice.
*************************************************************/
const whisper = function (msg) {
  console.log(msg.toLowerCase());
};
function repeatTwice(fn, msg) {
  fn(msg);
  fn(msg);
}
console.log("\n7) Functions as Values");
repeatTwice(whisper, "PLEASE BE QUIET");

/************************************************************
  8) Arrow Functions
  Write `square` as an arrow function returning n * n.
  Then use it in map to square all numbers in the array.
*************************************************************/
const square = (n) => n * n;

console.log("\n8) Arrow Functions");
console.log("square(4) =", square(4));

const squared = [2, 4, 6].map(square);
console.log("[2,4,6] squared =", squared); // [4, 16, 36]


/************************************************************
  9) Returning Values
  `maxOfTwo(a, b)` returns the larger number.
  Test with (10, 3) and (5, 9).
*************************************************************/
function maxOfTwo(a, b) {
  if (a > b) return a;
  return b;
}
console.log("\n9) Returning Values");
console.log("maxOfTwo(10, 3) =", maxOfTwo(10, 3));
console.log("maxOfTwo(5, 9)  =", maxOfTwo(5, 9));

/************************************************************
  10) Functions with HTML Events
  HTML has:
    <button id="colorBtn" onclick="changeColor()">Change Color</button>
    <button id="jsBtn">Bind via addEventListener</button>

  Part A) Function declaration `changeColor` bound via inline onclick.
  Part B) Function expression `logClick` bound via addEventListener.
*************************************************************/

// Part A: Declaration (global in classic scripts), used by inline `onclick`
function changeColor() {
  var btn = document.getElementById("colorBtn");
  btn.style.backgroundColor = "lightblue";
  console.log("Color changed via inline onclick (declaration).");
}

// Part B: Expression bound dynamically
const logClick = function (event) {
  console.log("Button clicked via addEventListener on:", event.currentTarget.id);
};

// Bind dynamically when DOM is ready (defer script guarantees elements exist)
var colorBtn = document.getElementById("colorBtn");
var jsBtn = document.getElementById("jsBtn");

colorBtn.addEventListener("click", logClick); // both handlers will fire
jsBtn.addEventListener("click", function () {
  console.log("jsBtn clicked — dynamic handler only.");
});
