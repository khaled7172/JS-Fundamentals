# JS Fundamentals
 Learning some JS
Week 2 topics :
<!-- Concepts tackled :
Expressions, Statements, Bindings, Binding Names, The Environment, Functions, console.log Function, Return Values, Control Flow, Conditional Execution, While and Do Loops, Indenting Code, For Loops, Breaking Out of a Loop, Updating Bindings Succinctly, Dispatching on a Value with Switch, Capitalization, Comments. -->

1. Expressions
Explanation: An expression in JavaScript is any valid piece of code that produces a value. Whether it’s a simple arithmetic calculation like 2 + 3 or a function call that returns a value, expressions are the building blocks for constructing more complex statements.
Code Example:
let result = 2 + 3;
console.log(result); // Outputs: 5


2. Statements
Explanation: A statement is a complete instruction that executes an action, such as declaring a variable or controlling the flow of execution. Unlike expressions that inherently produce a value, statements are the commands that structure your program, often containing embedded expressions.
Code Example:


let x = 10; // This assignment is a statement that includes an expression (10)
if (x > 5) {
  console.log("x is greater than 5");
}


3. Bindings
Explanation: A binding is the association between a name and a value within a specific scope or context in your program. It is the process of linking an identifier (like a variable) to its actual value, and while the term “variable” often implies a storage location, binding emphasizes the mapping in the execution context.
Code Example:


const pi = 3.14; // 'pi' is bound to the value 3.14


4. Binding Names
Explanation: A valid binding name in JavaScript must start with a letter, underscore (_), or dollar sign ($) and can continue with alphanumeric characters, underscores, or dollar signs. They must not use reserved keywords like if, for, or while to avoid conflicts with JavaScript syntax.
Code Example:


let _userName = "Alice";  // Valid binding name
let $amount = 42;         // Valid binding name
// let 2ndPlace = "Bob";  // Invalid: cannot start with a digit


5. The Environment
Explanation: The environment in a JavaScript program refers to the context in which code is executed, including all defined variables, functions, and objects. It represents the mapping between identifiers and their respective values, known as lexical or scope environments, and plays a crucial role in variable resolution.
Code Example:
function showEnvironment() {
  let a = 1;
  let b = 2;
  // The environment of this function includes bindings for 'a' and 'b'.
  console.log(a, b);
}
showEnvironment();


6. Functions
Explanation: Functions are reusable blocks of code that perform specific tasks and are fundamental to organizing a program. They can be defined using function declarations, expressions, or arrow syntax, and they may accept parameters and return results, thereby encapsulating behavior.
Code Example:


function add(x, y) {
  return x + y;
}
console.log(add(3, 4)); // Outputs: 7


7. The console.log Function
Explanation: The console.log function is a primary tool for developers to output values, messages, or debugging information to the console. It provides immediate feedback during development, making it easier to trace the flow of execution and inspect variables interactively.
Code Example:


let message = "Hello, JavaScript!";
console.log(message); // Outputs: Hello, JavaScript!


8. Return Values
Explanation: The return statement in a function halts execution and sends a value back to the caller. This mechanism allows functions to produce outputs that can be used in further calculations or stored for later use, making them modular and reusable.
Code Example:


function multiply(a, b) {
  return a * b; // Returns the product of a and b
}
console.log(multiply(4, 5)); // Outputs: 20


9. Control Flow
Explanation: Control flow dictates the order in which JavaScript executes code, relying on constructs like conditionals, loops, and function calls. By determining which path the execution takes, control flow makes code dynamic and responsive to different conditions and inputs.
Code Example:


for (let i = 0; i < 3; i++) {
  console.log("Iteration:", i);
}


10. Conditional Execution
Explanation: Conditional execution uses structures like if, else if, and else to run different blocks of code based on whether a condition evaluates to true or false. This design allows the program to make decisions dynamically, executing only the code relevant to the current state or input.
Code Example:


let score = 85;
if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else {
  console.log("Below B grade");
}


11. While and Do Loops
Explanation: A while loop will continue executing its block of code so long as its condition remains true, checking at the beginning of each iteration. In contrast, a do loop executes its block at least once before checking the condition, which is useful when the code needs to run before evaluating the condition.
Code Example:


let i = 0;
while (i < 3) {
  console.log("While Loop:", i);
  i++;
}


let j = 0;
do {
  console.log("Do Loop:", j);
  j++;
} while (j < 3);


12. Indenting Code
Explanation: Indentation is crucial for readability, as it visually delineates blocks of code, such as inside loops, conditions, and functions. While JavaScript does not require indentation for code execution, consistent indenting is essential for maintaining clean, understandable code, especially in collaborative environments.
Code Example:


if (true) {
    console.log("Proper indentation clarifies code structure.");
} else {
    console.log("Clean code equals fewer misunderstandings.");
}


13. For Loops
Explanation: The for loop is designed for iterating a specific number of times and follows a clear structure: initialization, condition, and increment/decrement. This structure makes it a powerful tool for traversing arrays or repeating actions, as it encapsulates the entire iteration process in one line.
Code Example:


for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}


14. Breaking Out of a Loop
Explanation: The break statement is used to immediately terminate the execution of a loop, regardless of the loop’s condition. This is particularly useful when a specific condition is met, and there is no need to continue iterating, thus optimizing the code’s performance and logic.
Code Example:
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Exit the loop when i equals 5
  console.log(i);
}


15. Updating Bindings Succinctly
Explanation: Operators like +=, -=, *=, and /= offer a shorthand way to update the value of a binding, making your code more concise and readable. These compound operators simplify common arithmetic operations, reducing redundancy by combining the operation and assignment in one step.
Code Example:


let count = 10;
count += 5; // Equivalent to count = count + 5
console.log(count); // Outputs: 15


16. Dispatching on a Value with switch
Explanation: The switch statement provides an organized way to execute different blocks of code based on the value of a variable. It is particularly useful when you have many discrete cases, offering a clearer alternative to multiple if-else statements by grouping code for specific values under distinct cases.
Code Example:


let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("You selected apple.");
    break;
  case "banana":
    console.log("You selected banana.");
    break;
  default:
    console.log("Unknown fruit.");
}


17. Capitalization in JavaScript
Explanation: JavaScript conventions suggest using camelCase for variable and function names to improve readability, while PascalCase is reserved for classes and constructor functions. This capitalization pattern helps distinguish between regular functions and objects that are intended to be instantiated as classes.
Code Example:


let myVariable = 5;            // CamelCase for variables
function doSomething() {         // CamelCase for functions
  return myVariable;
}
class MyClass {                // PascalCase for classes
  constructor() {
    this.name = "Example";
  }
}


18. Comments
Explanation: Comments are used to annotate code with explanations, make notes, or temporarily disable code without execution. JavaScript supports single-line comments with // and multi-line comments enclosed in /* ... */, both of which are essential for collaborative development and clear documentation.
Code Example:


// This is a single-line comment


/*
  This is a multi-line comment.
  It can span multiple lines.
*/
console.log("Comments are non-executable text.");