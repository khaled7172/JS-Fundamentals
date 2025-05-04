let string="hello";//string

let num = 7;//number

let f = true;//boolean

let n = null;//null

let v;//undefined

console.log(typeof string);

console.log(typeof num);

console.log(typeof f);

console.log(typeof n);

console.log(typeof v);

//Adding 2 numbers and a string that contains a number

let x = 10;

let y = 20;

let str = "5";

console.log(x+y+str);//output would be "305"since string stays as a string and JS adds left to right:
//10+20=30
//30+"5"="305"(number gets converted to string)

let fixedSum = x+y+Number(str);
//10+20+5=35
console.log(fixedSum);

//Unary plus (+) and minus (-) try to convert the value to a number first

let s = "10";

let bool = true;

let invalid = "abc";

console.log(+s);//string "10" becomes number 10

console.log(-str);//same but -10

console.log(+bool);//true becomes 1

console.log(-false);//false becomes 0

console.log(+invalid);//NaN "abc" cant be converted to a number

//Boolean Comparison

//==(loose comparison)allows type conversion

//===(strict comparison)compares type and value

console.log("5"==5);//true "5" becomes number 5

console.log("5"===5);//false,types dont match

console.log(false==0);//true,both are false kind-of according to JS logic

console.log(false===0);//false,boolean vs number

console.log(null==undefined);//true,special rule

console.log(null===undefined);//false,type mismatch

//Empty values

//compare null and undefined

let a = null;
let b;

console.log(a==b);//true,JS treats them both as empty

console.log(a===b);//false,different types,object vs undefined

//Type conversion 
//Uses:
//Number(): converts to number
//String(): converts to string
//Boolean(): converts to true/false

let values = ["123","",false,undefined];

values.forEach(v => {

    console.log("Value:", v);

    console.log("To Number:",Number(v));

    console.log("To String:",String(v));

    console.log("To Boolean:",Boolean(v));

    console.log("---");

});
//sample run

//v[1]

//"123"

//123

//"123"

//true

//---

//v[2]

//""

//0

//""

//false

//---

//v[3]

//false

//0

//"false"

//false

//---

//v[4]

//undefined

//NaN

//"undefined"

//false

//---

//Bonus 

//Creating a function to take any input and logs:
//original type
//type after conversion to string
//type after conversion to number
//type after conversion to boolean
//test on 3 values

function convertAndDescribe(value){
    console.log("Original:",value,typeof value+"\n");

    console.log("String:",String(value), typeof String(value)+"\n");

    console.log("Number:",Number(value), typeof Number(value)+"\n");

    console.log("Boolean:",Boolean(value), typeof Boolean(value)+"\n");

    console.log("------------"+"\n");


}

//now call the function

convertAndDescribe("0");
convertAndDescribe(false);
convertAndDescribe(undefined);