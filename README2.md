Task 3 Concepts - JavaScript Functions

---

1. Functions

A function is a reusable block of code designed to perform a particular task.

---

2. How to Define a Function

 a) Function Declaration
            
```javascript
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice")); // Output: Hello, Alice
```

b) Function Expression

```javascript
const greet = function(name) {
  return "Hello, " + name;
};
console.log(greet("Bob")); // Output: Hello, Bob
```

---

3. Bindings and Scope

Bindings are variables. Scope is the region where a binding is accessible.

```javascript
let outer = "I’m outside";

function example() {
  let inner = "I’m inside";
  console.log(outer); // accessible
  // console.log(inner); // works here
}

example();
// console.log(inner); // Error: inner is not defined (out of scope)
```

---

4. Functions as Values

Functions can be assigned to variables, passed to other functions, and returned.

```javascript
function sayHi() {
  console.log("Hi");
}

const greet = sayHi;
greet(); // Output: Hi
```

---

### 5. Declaration Notation

This is the traditional way to define functions using the `function` keyword.

```javascript
function square(x) {
  return x * x;
}

console.log(square(4)); // Output: 16
```

---

6. Arrow Functions

A concise way to write functions (introduced in ES6).

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

With one parameter and multiline body:

```javascript
const double = x => {
  return x * 2;
};
console.log(double(4)); // Output: 8
```

---

7. The Call Stack

The call stack tracks function calls.

```javascript
function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.log("End of stack");
}
one();
```

Each function is pushed onto the stack and popped off when done.

---
8. Optional Arguments

JavaScript allows functions to be called with more or fewer arguments.

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));     // Output: 5
console.log(multiply(5, 2));  // Output: 10
```

Using rest parameters:

```javascript
function showArgs(...args) {
  console.log(args);
}
showArgs(1, 2, 3); // Output: [1, 2, 3]
```

---
