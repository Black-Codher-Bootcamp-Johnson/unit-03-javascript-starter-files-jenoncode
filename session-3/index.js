// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
let b = 10;
const c = a + b;

function sayHey() {
    console.log ("Hey!");

    sayHey();
}

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}

function futureAge(name, age) {
    const answer= age + 5
    return name + " The future Age is: " + answer; 

}
console.log (futureAge("Jennifer", 32))

    
